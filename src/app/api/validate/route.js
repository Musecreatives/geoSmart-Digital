// unusable code
// import { NextResponse } from 'next/server';

// export async function GET(request) {
//     const { searchParams } = new URL(request.url);
//     const certId = searchParams.get('cert_id');

//     if (!certId) {
//         return NextResponse.json({ message: 'Certificate ID is required' }, { status: 400 });
//     }

//     try {
//         const response = await fetch(`https://ncrs-backend.onrender.com/api/v1/certification/check-verlidity?cert_id=${certId}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (!response.ok) {
//             console.error('Backend API Error:', response.status, await response.text());
//             return NextResponse.json({ message: 'Invalid certificate code' }, { status: 400 });
//         }

//         const data = await response.json();
//         return NextResponse.json(data);
//     } catch (error) {
//         console.error('Server Error:', error);
//         return NextResponse.json({ message: 'Server error' }, { status: 500 });
//     }
// }
/*end*/


const { default: axios } = require("axios")

export default async function checkCert(certId) {
    try {
        const response = await axios(`${process.env.NEXT_PUBLIC_BASE_URL}/${certId}`)
        return {data:response.data, status:response.status}
    } catch (err) {
        return { data:err?.response?.data, status:err.status }
    }
}

