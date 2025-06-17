export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    console.log('Received session review data:', data);

    // Your Google Apps Script Web App URL
    const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzO1R7NiF8J0BFXcKPe_P0wX5VNSbpdN9zsjGtwJNd4tkY2VhJvnaNpNux-Nef8QSqZ/exec';
    
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script responded with status: ${response.status}`);
    }

    const result = await response.text();
    console.log('Google Apps Script response:', result);

    return new Response(JSON.stringify({ success: true, message: 'Review submitted successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error in session review API:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Failed to submit review',
      details: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
