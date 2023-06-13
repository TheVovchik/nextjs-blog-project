import { closeDB, connectDB, insertDoc } from "@/api/mongo";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !email.includes('@') || !name.trim() || !message.trim()) {
      console.log('error')
      res.status(422).json({ error: true, message: 'invalid data', data: null});

      return;
    }

    const newMessage = {
      email, name, message,
    }

    try {
      await connectDB();
    } catch (error) {
      res.status(500).json({ error: true, message: 'database connection error', data: null})

      return;
    }

    try {
      const document = await insertDoc('questions', newMessage);

      newMessage._id = document.insertedId;

      res.status(201).json({ error: false, message: 'success', data: newMessage});
    } catch (error) {
      res.status(500).json({ error: true, message: 'database error on adding data', data: null})

      return;
    }


    closeDB();
  }
}
