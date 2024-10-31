// pages/api/save-data.js
import ExcelJS from 'exceljs';

// pages/api/save-data.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email } = req.body;
  
      // You can perform any necessary validation or processing here.
  
      // Return a success response
      res.status(200).json({ message: 'Data received successfully!' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  
