const ALLOW = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://elections.am',
  'https://dev.elections.am',
]
export default function cors(req, res, next) {
  try {
    const { origin } = req.headers;
    if (ALLOW.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS,DELETE,PATCH');
      res.setHeader('Access-Control-Allow-Headers', 'Authorization,X-Token,Content-Type');
      // res.setHeader('Access-Control-Allow-Credentials', 'True');
    }
    next();
  } catch (e) {
    next(e)
  }

}