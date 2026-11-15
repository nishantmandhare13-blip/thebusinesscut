import { NextRequest, NextResponse } from 'next/server';
import { serverStore } from '@/lib/serverStore';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get('userId') || undefined;
  const cohortId = searchParams.get('cohortId') || undefined;

  const submissions = serverStore.getSubmissions({ userId, cohortId });
  return NextResponse.json({
    total: submissions.length,
    submissions
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { lessonId, content, deliverableLinks } = body as {
      lessonId: string;
      content: string;
      deliverableLinks?: string[];
    };

    if (!lessonId || !content) {
      return NextResponse.json(
        { error: 'lessonId and content are required' },
        { status: 400 }
      );
    }

    const created = serverStore.createSubmission({
      lessonId,
      content,
      deliverableLinks
    });

    return NextResponse.json(
      { success: true, submission: created },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit assignment' }, { status: 500 });
  }
}
