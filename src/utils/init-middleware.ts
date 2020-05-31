export default function initMiddleware(middleware) {
  return (request, res) =>
    new Promise((resolve, reject) => {
      middleware(request, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}
