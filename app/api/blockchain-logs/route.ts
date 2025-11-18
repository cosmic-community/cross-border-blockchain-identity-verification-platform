import { NextResponse } from 'next/server'
import { cosmic, hasStatus } from '@/lib/cosmic'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const limit = parseInt(searchParams.get('limit') || '50')

    const query: any = { type: 'blockchain-logs' }
    
    if (userId) {
      query['metadata.user'] = userId
    }

    const response = await cosmic.objects
      .find(query)
      .props(['id', 'title', 'metadata', 'created_at'])
      .limit(limit)

    // Manual sorting by timestamp (newest first)
    const sortedLogs = response.objects.sort((a, b) => {
      const dateA = new Date(a.metadata?.timestamp || a.created_at || '').getTime()
      const dateB = new Date(b.metadata?.timestamp || b.created_at || '').getTime()
      return dateB - dateA
    })

    return NextResponse.json({
      success: true,
      logs: sortedLogs,
      total: sortedLogs.length,
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return NextResponse.json({
        success: true,
        logs: [],
        total: 0,
      })
    }
    
    console.error('Blockchain logs error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blockchain logs' },
      { status: 500 }
    )
  }
}