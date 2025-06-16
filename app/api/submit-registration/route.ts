import { NextResponse } from "next/server";

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxbUJh-luyBBo7moG4FIuhCzZgpQk2ouWL24dkdyP0qP7qH2BKgXM2wG30U-g5CPwJp/exec";
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return NextResponse.json({ 
        message: "Registration submitted successfully!" 
      });
    } else {
      const errorText = await response.text();
      console.error("Google Apps Script error:", errorText);
      throw new Error(`Failed to submit to Google Sheets: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { 
        message: "Failed to submit registration.", 
        error: error instanceof Error ? error.message : "Unknown error"
      }, 
      { status: 500 }
    );
  }
}
