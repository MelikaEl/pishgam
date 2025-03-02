import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const allowedOrigins = ['http://localhost:3000'];

export function middleware(request: NextRequest) {
  const origin = request.headers.get('origin');
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, { status: 403, statusText: 'Forbidden' });
  }

  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', origin || '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { status: 204 });
  }

  return response;
}
