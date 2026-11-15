import { NextRequest, NextResponse } from 'next/server';
import { serverStore } from '@/lib/serverStore';
import { AdminSettings } from '@/types/lms';

export async function GET() {
  const settings = serverStore.getAdminSettings();
  return NextResponse.json(settings);
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, ...updates } = body as { action?: string } & Partial<AdminSettings>;

    if (action === 'reset_demo') {
      serverStore.resetDemoData();
      return NextResponse.json({
        success: true,
        message: 'Demo state reset successfully'
      });
    }

    const updated = serverStore.updateAdminSettings(updates);
    return NextResponse.json({
      success: true,
      settings: updated
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update admin settings' }, { status: 500 });
  }
}
