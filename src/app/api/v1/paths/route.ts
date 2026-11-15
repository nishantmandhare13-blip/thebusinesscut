import { NextResponse } from 'next/server';
import { serverStore } from '@/lib/serverStore';

export async function GET() {
  const paths = serverStore.getLearningPaths();
  return NextResponse.json({
    total: paths.length,
    paths
  });
}
