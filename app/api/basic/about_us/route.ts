import { NextResponse } from 'next/server';
import axios from 'axios';

const BASE_URL = 'http://192.168.101.11:8000';

export async function GET() {
  try {
    const response = await axios.get(`${BASE_URL}/basic/about_us/`);
    const data = response.data;
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { message: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
