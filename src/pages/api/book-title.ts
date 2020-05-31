import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  response.statusCode = 200;
  const responseBookTitle = await fetch('https://u-1f97a-api.glitch.me/book', {
    method: 'POST',
    body: request.body,
  });
  console.log(responseBookTitle);
  const json = await responseBookTitle.json();
  response.json(json);
};

export default handler;
