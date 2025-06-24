export default function handler(req, res) {
  console.log("Pingback received:", req.query);
  res.status(200).send('OK');
}
