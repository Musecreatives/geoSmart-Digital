// src/api/validate.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { certificateCode } = req.body;
  
      try {
        // Call the external API with the certificate code
        const response = await fetch('https://ncrs-backend.onrender.com/api/v1/certification/add-certificate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ certificate_id: certificateCode }), // Adjust this as per the API requirement
        });
  
        const data = await response.json();
  
        // If the API responds with a valid certificate, return success
        if (response.ok) {
          return res.status(200).json(data);
        } else {
          // Handle errors from the API
          return res.status(400).json({ message: 'Invalid certificate code' });
        }
      } catch (error) {
        // Catch any errors in the fetch call
        return res.status(500).json({ message: 'Server error' });
      }
    } else {
      // Handle unsupported methods
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  