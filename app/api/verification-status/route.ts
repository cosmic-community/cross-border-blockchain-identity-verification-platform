import { NextResponse } from 'next/server'
import { cosmic } from '@/lib/cosmic'
import { recordBlockchainTransaction } from '@/lib/blockchain'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { requestId, status, reason } = body

    // Validate status
    const validStatuses = ['pending', 'approved', 'rejected']
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status value' },
        { status: 400 }
      )
    }

    // Record blockchain transaction for status update
    const transaction = recordBlockchainTransaction('status-update', {
      requestId,
      status,
      reason: reason || '',
    })

    // Update verification request status in Cosmic
    const updateData: any = {
      metadata: {
        status,
      },
    }

    if (status === 'approved') {
      updateData.metadata.verification_date = new Date().toISOString()
    } else if (status === 'rejected' && reason) {
      updateData.metadata.rejection_reason = reason
    }

    const updatedRequest = await cosmic.objects.updateOne(requestId, updateData)

    // Log blockchain transaction
    await cosmic.objects.insertOne({
      type: 'blockchain-logs',
      title: `Status Update - ${status}`,
      metadata: {
        transaction_type: 'status-update',
        blockchain_hash: transaction.hash,
        timestamp: transaction.timestamp,
        block_number: transaction.blockNumber,
        transaction_id: transaction.transactionId,
      },
    })

    return NextResponse.json({
      success: true,
      updatedRequest: updatedRequest.object,
      transactionId: transaction.transactionId,
    })
  } catch (error) {
    console.error('Status update error:', error)
    return NextResponse.json(
      { error: 'Failed to update verification status' },
      { status: 500 }
    )
  }
}