import dbConnect from '@/pages/api/dbConnect';
import User from '@/pages/api/models/user';

export default async function handler(req, res) {
  const { method, query } = req;

  await dbConnect(); // Connect to MongoDB

  switch (method) {
    case 'GET':
      try {
        const { search } = query; 
        
        const users = await User.find({
          $or: [
            { first_name: { $regex: search, $options: 'i' } },
            { last_name: { $regex: search, $options: 'i' } },
          ],
        });
        
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        console.log(error,'errr');
        
        res.status(400).json({ success: false, error: 'Search failed' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
