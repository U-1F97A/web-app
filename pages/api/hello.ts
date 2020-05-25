export default (request, res) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};
