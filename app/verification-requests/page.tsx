import { Clock, CheckCircle, XCircle, Globe, Building2 } from 'lucide-react'

export default function VerificationRequestsPage() {
  // Mock data - in production, fetch from Cosmic CMS
  const requests = [
    {
      id: 1,
      organization: 'Global Bank Corp',
      country: 'United States',
      purpose: 'Account Opening - Compliance Verification',
      status: 'pending',
      requestDate: '2024-01-15T10:30:00Z',
      blockchainHash: '0x7f9c3d2a1b4e5f6c8d9a0e1f2b3c4d5e',
    },
    {
      id: 2,
      organization: 'TechStart International',
      country: 'United Kingdom',
      purpose: 'Employment Background Check',
      status: 'approved',
      requestDate: '2024-01-14T14:20:00Z',
      verificationDate: '2024-01-14T15:45:00Z',
      blockchainHash: '0xa1b2c3d4e5f6789012345678901234567',
    },
    {
      id: 3,
      organization: 'HealthCare Global',
      country: 'Canada',
      purpose: 'Patient Identity Verification',
      status: 'approved',
      requestDate: '2024-01-13T09:15:00Z',
      verificationDate: '2024-01-13T10:30:00Z',
      blockchainHash: '0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f',
    },
    {
      id: 4,
      organization: 'Investment Partners LLC',
      country: 'Singapore',
      purpose: 'KYC Compliance Verification',
      status: 'rejected',
      requestDate: '2024-01-12T16:45:00Z',
      rejectionReason: 'Insufficient purpose documentation',
      blockchainHash: '0x9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d',
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-6 h-6 text-yellow-500" />
      case 'approved':
        return <CheckCircle className="w-6 h-6 text-neon-green" />
      case 'rejected':
        return <XCircle className="w-6 h-6 text-red-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return 'px-4 py-2 bg-yellow-500/20 text-yellow-500 rounded-full text-sm font-semibold'
      case 'approved':
        return 'px-4 py-2 bg-neon-green/20 text-neon-green rounded-full text-sm font-semibold'
      case 'rejected':
        return 'px-4 py-2 bg-red-500/20 text-red-500 rounded-full text-sm font-semibold'
      default:
        return ''
    }
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Verification Requests
          </h1>
          <p className="text-xl text-gray-300">
            Review and manage cross-border verification requests
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="glass-card p-6">
            <h3 className="text-gray-400 mb-2">Total Requests</h3>
            <p className="text-4xl font-bold">{requests.length}</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-gray-400 mb-2">Pending</h3>
            <p className="text-4xl font-bold text-yellow-500">
              {requests.filter((r) => r.status === 'pending').length}
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-gray-400 mb-2">Approved</h3>
            <p className="text-4xl font-bold text-neon-green">
              {requests.filter((r) => r.status === 'approved').length}
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-gray-400 mb-2">Rejected</h3>
            <p className="text-4xl font-bold text-red-500">
              {requests.filter((r) => r.status === 'rejected').length}
            </p>
          </div>
        </div>

        {/* Requests List */}
        <div className="space-y-6">
          {requests.map((request) => (
            <div key={request.id} className="glass-card p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  {getStatusIcon(request.status)}
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{request.organization}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        {request.country}
                      </span>
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        Organization
                      </span>
                    </div>
                  </div>
                </div>
                <span className={getStatusBadge(request.status)}>
                  {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm text-gray-400">Purpose</label>
                  <p className="text-lg">{request.purpose}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-400">Request Date</label>
                    <p>{new Date(request.requestDate).toLocaleString()}</p>
                  </div>
                  {request.verificationDate && (
                    <div>
                      <label className="text-sm text-gray-400">Verification Date</label>
                      <p>{new Date(request.verificationDate).toLocaleString()}</p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-sm text-gray-400">Blockchain Hash</label>
                  <p className="font-mono text-neon-blue text-sm break-all">
                    {request.blockchainHash}
                  </p>
                </div>

                {request.status === 'rejected' && request.rejectionReason && (
                  <div className="glass-card p-4 bg-red-500/10">
                    <label className="text-sm text-red-500">Rejection Reason</label>
                    <p className="text-red-400">{request.rejectionReason}</p>
                  </div>
                )}
              </div>

              {request.status === 'pending' && (
                <div className="flex gap-3">
                  <button className="flex-1 px-6 py-3 bg-neon-green/20 text-neon-green rounded-lg hover:bg-neon-green/30 transition-all font-semibold">
                    Approve Request
                  </button>
                  <button className="flex-1 px-6 py-3 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30 transition-all font-semibold">
                    Reject Request
                  </button>
                </div>
              )}

              {request.status === 'approved' && (
                <div className="glass-card p-4 bg-neon-green/10">
                  <p className="text-neon-green text-sm">
                    ✓ Zero-Knowledge Proof generated and sent to organization
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}