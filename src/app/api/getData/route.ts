// src/app/api/getData/route.ts
import {JSDOM} from 'jsdom'
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch the data from the external URL
    const res = await fetch('https://www.investing.com/commodities/gold-historical-data');
    
    // Check if the response is successful
    if (!res.ok) {
      throw new Error('Failed to fetch data from the external source');
    }
    
    // Parse the HTML response as text
    const html = await res.text();
    const dom=new JSDOM (html)
    const document =dom.window.document
    const downloads =document.querySelector('.section-sub-title')
    // Optionally log the HTML for debugging purposes
    console.log('HTML:', html);

    // Return the HTML data as JSON
    return NextResponse.json({ html });  // You can return parsed or processed data instead of raw HTML
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
