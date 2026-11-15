import { NextRequest, NextResponse } from 'next/server';
import { serverStore } from '@/lib/serverStore';

export async function GET() {
  const cohorts = serverStore.getCohorts();
  return NextResponse.json({
    total: cohorts.length,
    cohorts
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, term, assignedLessonIds } = body as {
      name: string;
      term: string;
      assignedLessonIds: string[];
    };

    if (!name || !term) {
      return NextResponse.json({ error: 'Name and term are required' }, { status: 400 });
    }

    const created = serverStore.createCohort(name, term, assignedLessonIds || []);
    return NextResponse.json({ success: true, cohort: created }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create cohort' }, { status: 500 });
  }
}
