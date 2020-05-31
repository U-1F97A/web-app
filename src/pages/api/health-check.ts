import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  const response = await fetch('https://u-1f97a-api.glitch.me/');
  //console.log(response);
  const json = await response.json();
  res.json(json);
};

export default handler;
