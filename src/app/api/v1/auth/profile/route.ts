import { NextRequest, NextResponse } from 'next/server';
import { serverStore } from '@/lib/serverStore';
import { UserProfile } from '@/types/lms';

export async function PUT(request: NextRequest) {
  try {
    const updates = await request.json() as Partial<UserProfile>;
    const updated = serverStore.updateProfile(updates);
    return NextResponse.json({
      success: true,
      user: updated
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}
