import { NextRequest, NextResponse } from 'next/server';
import { serverStore } from '@/lib/serverStore';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const body = await request.json();
    const { grade, feedback, rubricScores } = body as {
      grade: number;
      feedback: string;
      rubricScores?: { criteria: string; score: number; maxScore: number }[];
    };

    if (grade === undefined || feedback === undefined) {
      return NextResponse.json(
        { error: 'grade and feedback are required' },
        { status: 400 }
      );
    }

    const graded = serverStore.gradeSubmission(id, grade, feedback, rubricScores);

    if (!graded) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, submission: graded });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to grade submission' }, { status: 500 });
  }
}
