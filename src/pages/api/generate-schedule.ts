import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  response.statusCode = 200;
  const responseGenerateSchedule = await fetch(
    'https://u-1f97a-api.glitch.me/genSchedule',
    {
      method: request.method,
      body: JSON.stringify(request.body),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const json = await responseGenerateSchedule.json();
  response.json(json);
};

export default handler;
