import { NextRequest, NextResponse } from 'next/server';
import { serverStore } from '@/lib/serverStore';
import { LearningProgress } from '@/types/lms';

export async function GET() {
  const progress = serverStore.getProgress();
  return NextResponse.json(progress);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { lessonId, ...updates } = body as { lessonId: string } & Partial<LearningProgress>;

    if (!lessonId) {
      return NextResponse.json({ error: 'lessonId is required' }, { status: 400 });
    }

    const updated = serverStore.updateProgress(lessonId, updates);
    return NextResponse.json({
      success: true,
      progress: updated
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update progress' }, { status: 500 });
  }
}
