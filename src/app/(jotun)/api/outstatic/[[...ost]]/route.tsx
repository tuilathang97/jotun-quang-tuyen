import { OutstaticApi } from 'outstatic'
import { NextRequest } from 'next/server'

// Outstatic types its handlers with a custom `Request & { session }`, which
// Next.js 15.5 route validation rejects. The handlers accept a plain
// NextRequest at runtime, so re-export them with compatible signatures.
export const GET = (
  req: NextRequest,
  segmentData: { params: Promise<{ ost?: string[] }> }
) =>
  OutstaticApi.GET(
    req as Parameters<typeof OutstaticApi.GET>[0],
    segmentData as unknown as Parameters<typeof OutstaticApi.GET>[1]
  )

export const POST = (
  req: NextRequest,
  segmentData: { params: Promise<{ ost?: string[] }> }
) =>
  OutstaticApi.POST(
    req as Parameters<typeof OutstaticApi.POST>[0],
    segmentData as unknown as Parameters<typeof OutstaticApi.POST>[1]
  )
