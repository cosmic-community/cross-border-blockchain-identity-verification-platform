import { NextResponse } from 'next/server'
import { cosmic } from '@/lib/cosmic'
import { generateBlockchainHash, generateZKPProof, deploySmartContract, recordBlockchainTransaction } from '@/lib/blockchain'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { userId, organizationId, purpose } = body

    // Generate blockchain hash for verification request
    const requestData = `${userId}-${organizationId}-${purpose}-${Date.now()}`
    const blockchainHash = generateBlockchainHash(requestData)

    // Generate ZKP proof (simulated)
    const zkpProof = generateZKPProof(blockchainHash)

    // Deploy smart contract (simulated)
    const smartContract = deploySmartContract({
      userId,
      organizationId,
      purpose,
      blockchainHash,
    })

    // Record blockchain transaction
    const transaction = recordBlockchainTransaction('verification', {
      userId,
      organizationId,
      blockchainHash,
      smartContractAddress: smartContract.address,
    })

    // Create verification request in Cosmic
    const verificationRequest = await cosmic.objects.insertOne({
      type: 'verification-requests',
      title: `Verification Request - ${organizationId}`,
      metadata: {
        user: userId,
        organization: organizationId,
        status: 'pending',
        blockchain_hash: blockchainHash,
        request_date: new Date().toISOString(),
        zkp_proof: zkpProof.proof,
        smart_contract_address: smartContract.address,
      },
    })

    // Log blockchain transaction
    await cosmic.objects.insertOne({
      type: 'blockchain-logs',
      title: `Verification Request - ${organizationId}`,
      metadata: {
        transaction_type: 'verification',
        user: userId,
        organization: organizationId,
        blockchain_hash: blockchainHash,
        timestamp: transaction.timestamp,
        block_number: transaction.blockNumber,
        transaction_id: transaction.transactionId,
      },
    })

    return NextResponse.json({
      success: true,
      verificationRequest: verificationRequest.object,
      blockchainHash,
      zkpProof: zkpProof.proof,
      smartContractAddress: smartContract.address,
      transactionId: transaction.transactionId,
    })
  } catch (error) {
    console.error('Verification request error:', error)
    return NextResponse.json(
      { error: 'Failed to create verification request' },
      { status: 500 }
    )
  }
}