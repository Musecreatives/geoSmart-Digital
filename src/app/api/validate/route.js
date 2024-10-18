import { NextResponse } from "next/server";

export async function POST(req) {
    const { certificateCode } = await req.json();
    console.log("Certificate Code:", certificateCode); // Logging input
  
    try {
      const response = await fetch("https://ncrs-backend.onrender.com/api/v1/certification/add-certificate", {
        method: "POST", // Verify correct method
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ certificate_id: certificateCode,}), // Check for expected data
      });
  
    //   console.log("Response Status:", response.status); // Log response status
    //   console.log("Response:", response); // Log entire response object
    //   console.log("Response Text:", await response.text()); // Log response text
      
      if (response.ok) {
        const data = await response.json();
        console.log("Data:", data); // Log parsed data
        return NextResponse.json(data);
      } else {
        return NextResponse.json({ message: "Invalid certificate code" }, { status: 400 });
      }
    } catch (error) {
      console.error("Server Error:", error); // Log error details
      return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
  }
  