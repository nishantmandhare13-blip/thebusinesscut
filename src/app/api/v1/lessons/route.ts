import { NextRequest, NextResponse } from 'next/server';
import { serverStore } from '@/lib/serverStore';
import { Lesson } from '@/types/lms';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get('search') || undefined;
  const subject = searchParams.get('subject') || undefined;
  const difficulty = searchParams.get('difficulty') || undefined;
  const status = searchParams.get('status') || undefined;
  const sort = searchParams.get('sort') || undefined;

  const lessons = serverStore.getLessons({
    search,
    subject,
    difficulty,
    status,
    sort
  });

  return NextResponse.json({
    total: lessons.length,
    lessons
  });
}

export async function POST(request: NextRequest) {
  try {
    const lessonData = await request.json() as Partial<Lesson>;
    const created = serverStore.createLesson(lessonData);
    return NextResponse.json(
      { success: true, lesson: created },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create lesson' }, { status: 500 });
  }
}
