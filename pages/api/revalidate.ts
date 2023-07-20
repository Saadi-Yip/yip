
export default async function handler(req:any, res:any) {
    // Check for secret to confirm this is a valid request
    res.setHeader("Access-Control-Allow-Origin","*");
    const {secret,slug} = req.query;
    if (secret !== process.env.REGENERATION_TOKEN) {
      return res.status(401).json({ message: 'Invalid token' })
    }
    try {
      // this should be the actual path not a rewritten path
      // e.g. for "/blog/[slug]" this should be "/blog/post-1"
      let page="/blog"
      if(slug){
        page = page + "/" +slug
      }
      await res.revalidate(page);
      return res.json({ revalidated: true })
    } catch (err) {
      // If there was an error
      return res.status(500).send(err)
    }
  }