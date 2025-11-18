import { Shield, Clock, CheckCircle, XCircle, FileText, Globe } from 'lucide-react'

export default function DashboardPage() {
  // Mock data - in real app, fetch from Cosmic CMS
  const stats = {
    totalVerifications: 12,
    pending: 3,
    approved: 8,
    rejected: 1,
  }

  const recentRequests = [
    {
      id: 1,
      organization: 'Global Bank Corp',
      country: 'United States',
      purpose: 'Account Opening',
      status: 'pending',
      date: '2024-01-15',
    },
    {
      id: 2,
      organization: 'TechStart International',
      country: 'United Kingdom',
      purpose: 'Employment Verification',
      status: 'approved',
      date: '2024-01-14',
    },
    {
      id: 3,
      organization: 'HealthCare Global',
      country: 'Canada',
      purpose: 'Patient Verification',
      status: 'approved',
      date: '2024-01-13',
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Your Dashboard
          </h1>
          <p className="text-xl text-gray-300">
            Manage your identity verifications and blockchain records
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400">Total Verifications</h3>
              <FileText className="w-6 h-6 text-neon-blue" />
            </div>
            <p className="text-4xl font-bold">{stats.totalVerifications}</p>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400">Pending</h3>
              <Clock className="w-6 h-6 text-yellow-500" />
            </div>
            <p className="text-4xl font-bold">{stats.pending}</p>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400">Approved</h3>
              <CheckCircle className="w-6 h-6 text-neon-green" />
            </div>
            <p className="text-4xl font-bold">{stats.approved}</p>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400">Rejected</h3>
              <XCircle className="w-6 h-6 text-red-500" />
            </div>
            <p className="text-4xl font-bold">{stats.rejected}</p>
          </div>
        </div>

        {/* Recent Requests */}
        <div className="glass-card p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Recent Verification Requests</h2>
          <div className="space-y-4">
            {recentRequests.map((request) => (
              <div key={request.id} className="bg-dark-card p-6 rounded-xl border border-dark-border hover:border-neon-blue/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{request.organization}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        {request.country}
                      </span>
                      <span>{request.purpose}</span>
                      <span>{new Date(request.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div>
                    {request.status === 'pending' && (
                      <span className="px-4 py-2 bg-yellow-500/20 text-yellow-500 rounded-full text-sm font-semibold">
                        Pending
                      </span>
                    )}
                    {request.status === 'approved' && (
                      <span className="px-4 py-2 bg-neon-green/20 text-neon-green rounded-full text-sm font-semibold">
                        Approved
                      </span>
                    )}
                    {request.status === 'rejected' && (
                      <span className="px-4 py-2 bg-red-500/20 text-red-500 rounded-full text-sm font-semibold">
                        Rejected
                      </span>
                    )}
                  </div>
                </div>
                {request.status === 'pending' && (
                  <div className="flex gap-3">
                    <button className="flex-1 px-6 py-2 bg-neon-green/20 text-neon-green rounded-lg hover:bg-neon-green/30 transition-all">
                      Approve
                    </button>
                    <button className="flex-1 px-6 py-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30 transition-all">
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Blockchain Identity */}
        <div className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-neon-blue" />
            Your Blockchain Identity
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400">Blockchain Hash</label>
              <p className="font-mono text-neon-blue mt-1">
                0x7f9c3d2a1b4e5f6c8d9a0e1f2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b
              </p>
            </div>
            <div>
              <label className="text-sm text-gray-400">ZKP Public Key</label>
              <p className="font-mono text-neon-green mt-1">
                0xa1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef12345
              </p>
            </div>
            <div>
              <label className="text-sm text-gray-400">Registration Date</label>
              <p className="mt-1">January 10, 2024</p>
            </div>
            <div>
              <label className="text-sm text-gray-400">Verification Status</label>
              <p className="mt-1 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-neon-green" />
                <span className="text-neon-green">Verified</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}