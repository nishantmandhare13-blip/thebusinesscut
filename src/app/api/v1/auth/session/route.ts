import { NextRequest, NextResponse } from 'next/server';
import { serverStore } from '@/lib/serverStore';
import { UserRole } from '@/types/lms';

export async function GET() {
  const user = serverStore.getCurrentUser();
  const role = serverStore.getCurrentRole();
  const allUsers = serverStore.getAllUsers();

  return NextResponse.json({
    user,
    currentRole: role,
    allUsers,
    availableRoles: ['student', 'instructor', 'admin']
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { role } = body as { role: UserRole };

    if (!role || !['student', 'instructor', 'admin'].includes(role)) {
      return NextResponse.json({ error: 'Invalid role provided' }, { status: 400 });
    }

    const updatedUser = serverStore.switchRole(role);
    return NextResponse.json({
      success: true,
      user: updatedUser,
      currentRole: role
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to switch role' }, { status: 500 });
  }
}
