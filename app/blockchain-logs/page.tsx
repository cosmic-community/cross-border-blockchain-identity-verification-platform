import { FileText, Clock, Shield, CheckCircle } from 'lucide-react'

export default function BlockchainLogsPage() {
  // Mock data - in production, fetch from API route
  const logs = [
    {
      id: 1,
      type: 'registration',
      title: 'User Registration',
      blockchainHash: '0x7f9c3d2a1b4e5f6c8d9a0e1f2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b',
      timestamp: '2024-01-15T10:30:00Z',
      blockNumber: 1234567,
      transactionId: 'tx_7f9c3d2a1b4e5f6c',
    },
    {
      id: 2,
      type: 'document-upload',
      title: 'Document Upload - Passport',
      blockchainHash: '0xa1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef12345',
      timestamp: '2024-01-15T11:45:00Z',
      blockNumber: 1234568,
      transactionId: 'tx_a1b2c3d4e5f67890',
    },
    {
      id: 3,
      type: 'verification',
      title: 'Verification Request - Global Bank Corp',
      blockchainHash: '0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d',
      timestamp: '2024-01-15T14:20:00Z',
      blockNumber: 1234569,
      transactionId: 'tx_3c4d5e6f7a8b9c0d',
    },
    {
      id: 4,
      type: 'status-update',
      title: 'Status Update - Approved',
      blockchainHash: '0x9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b',
      timestamp: '2024-01-15T15:45:00Z',
      blockNumber: 1234570,
      transactionId: 'tx_9a0b1c2d3e4f5a6b',
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'registration':
        return <Shield className="w-5 h-5 text-neon-blue" />
      case 'document-upload':
        return <FileText className="w-5 h-5 text-neon-green" />
      case 'verification':
        return <CheckCircle className="w-5 h-5 text-neon-purple" />
      case 'status-update':
        return <Clock className="w-5 h-5 text-yellow-500" />
      default:
        return null
    }
  }

  const getTypeBadge = (type: string) => {
    const badges: Record<string, string> = {
      registration: 'bg-neon-blue/20 text-neon-blue',
      'document-upload': 'bg-neon-green/20 text-neon-green',
      verification: 'bg-neon-purple/20 text-neon-purple',
      'status-update': 'bg-yellow-500/20 text-yellow-500',
    }
    return badges[type] || 'bg-gray-500/20 text-gray-500'
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Blockchain Transaction Logs
          </h1>
          <p className="text-xl text-gray-300">
            Immutable audit trail of all platform activities
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="glass-card p-6">
            <h3 className="text-gray-400 mb-2">Total Transactions</h3>
            <p className="text-4xl font-bold">{logs.length}</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-gray-400 mb-2">Latest Block</h3>
            <p className="text-4xl font-bold text-neon-blue">
              {Math.max(...logs.map((l) => l.blockNumber))}
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-gray-400 mb-2">Verifications</h3>
            <p className="text-4xl font-bold text-neon-green">
              {logs.filter((l) => l.type === 'verification').length}
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-gray-400 mb-2">Documents</h3>
            <p className="text-4xl font-bold text-neon-purple">
              {logs.filter((l) => l.type === 'document-upload').length}
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {logs.map((log, index) => (
            <div key={log.id} className="glass-card p-6 relative">
              {index < logs.length - 1 && (
                <div className="absolute left-6 top-full w-0.5 h-6 bg-gradient-to-b from-neon-blue to-transparent" />
              )}

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center">
                  {getTypeIcon(log.type)}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{log.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {new Date(log.timestamp).toLocaleString()}
                        </span>
                        <span>Block #{log.blockNumber}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeBadge(log.type)}`}>
                      {log.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <label className="text-xs text-gray-400">Transaction ID</label>
                      <p className="font-mono text-sm text-neon-blue">{log.transactionId}</p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">Blockchain Hash</label>
                      <p className="font-mono text-xs text-gray-300 break-all">
                        {log.blockchainHash}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Notice */}
        <div className="glass-card p-8 mt-12 bg-neon-blue/5">
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 text-neon-blue flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Immutable Blockchain Records</h3>
              <p className="text-gray-400 leading-relaxed">
                All transactions are recorded on the blockchain using SHA-256 hashing, creating a 
                permanent, tamper-proof audit trail. Each record includes a unique transaction ID, 
                blockchain hash, and block number for complete verification and transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}