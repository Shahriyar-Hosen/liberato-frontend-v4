import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Basic ${process.env.BASIC_NEWSLETTER}`);
  myHeaders.append('Content-Type', 'application/json');

  const { email, name } = req.body;
  const raw = JSON.stringify({
    email,
    name,
    status: 'enabled',
    lists: [2],
  });

  try {
    const sub = await (
      await fetch('https://newsletter.udruga-liberato.hr/api/subscribers', {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      })
    ).json();

    res.status(200).json(sub);
  } catch (error) {
    res.status(500).json(error);
  }
}
