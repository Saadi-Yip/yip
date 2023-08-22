import getBlog from "../../controllers/getBlog";

export default async function handler(req:any, res:any) {
  try {
    const { slug } = req.query;
    const response = await getBlog(slug) as any;

    if (!response.ok) {
      return res.status(500).json({ response });
    }
    const data = await response.json();
    res.status(200).json({ data });
  }
   catch (error) {
    res.status(500).json({ error });
  }
}
