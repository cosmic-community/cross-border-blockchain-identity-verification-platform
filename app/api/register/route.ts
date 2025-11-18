import { NextResponse } from 'next/server'
import { cosmic } from '@/lib/cosmic'
import { generateBlockchainHash, generateZKPProof, recordBlockchainTransaction } from '@/lib/blockchain'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, phone, role } = body

    // Generate blockchain hash for identity
    const identityData = `${fullName}-${email}-${phone}-${Date.now()}`
    const blockchainHash = generateBlockchainHash(identityData)

    // Generate ZKP keys
    const zkpKeys = generateZKPProof(blockchainHash)

    // Record blockchain transaction
    const transaction = recordBlockchainTransaction('registration', {
      email,
      role,
      blockchainHash,
    })

    // Create user in Cosmic
    const user = await cosmic.objects.insertOne({
      type: 'users',
      title: fullName,
      metadata: {
        email,
        phone: phone || '',
        role,
        blockchain_hash: blockchainHash,
        identity_verified: false,
        zkp_public_key: zkpKeys.publicKey,
        registration_date: new Date().toISOString(),
      },
    })

    // Log blockchain transaction
    await cosmic.objects.insertOne({
      type: 'blockchain-logs',
      title: `Registration - ${email}`,
      metadata: {
        transaction_type: 'registration',
        user: user.object.id,
        blockchain_hash: blockchainHash,
        timestamp: transaction.timestamp,
        block_number: transaction.blockNumber,
        transaction_id: transaction.transactionId,
      },
    })

    return NextResponse.json({
      success: true,
      user: user.object,
      blockchainHash,
      zkpPublicKey: zkpKeys.publicKey,
      transactionId: transaction.transactionId,
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Failed to register user' },
      { status: 500 }
    )
  }
}