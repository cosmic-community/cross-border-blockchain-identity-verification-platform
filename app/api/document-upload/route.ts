import { NextResponse } from 'next/server'
import { cosmic } from '@/lib/cosmic'
import { generateBlockchainHash, simulateEncryption, recordBlockchainTransaction } from '@/lib/blockchain'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { userId, documentType, documentData } = body

    // Simulate encryption of document data
    const encryptedData = simulateEncryption(documentData)

    // Generate blockchain hash for document
    const documentHash = generateBlockchainHash(documentData)

    // Record blockchain transaction
    const transaction = recordBlockchainTransaction('document-upload', {
      userId,
      documentType,
      documentHash,
    })

    // Create document record in Cosmic (store only hash, not actual data)
    const document = await cosmic.objects.insertOne({
      type: 'documents',
      title: `${documentType} - ${userId}`,
      metadata: {
        user: userId,
        document_type: documentType,
        blockchain_hash: documentHash,
        encrypted: true,
        upload_date: new Date().toISOString(),
        encryption_algorithm: 'AES-256',
      },
    })

    // Log blockchain transaction
    await cosmic.objects.insertOne({
      type: 'blockchain-logs',
      title: `Document Upload - ${documentType}`,
      metadata: {
        transaction_type: 'document-upload',
        user: userId,
        blockchain_hash: documentHash,
        timestamp: transaction.timestamp,
        block_number: transaction.blockNumber,
        transaction_id: transaction.transactionId,
      },
    })

    return NextResponse.json({
      success: true,
      document: document.object,
      blockchainHash: documentHash,
      transactionId: transaction.transactionId,
      encrypted: true,
    })
  } catch (error) {
    console.error('Document upload error:', error)
    return NextResponse.json(
      { error: 'Failed to upload document' },
      { status: 500 }
    )
  }
}