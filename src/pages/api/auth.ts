import { NextApiHandler } from 'next';

export type AuthHandlerBody = {
  password: string;
};

const AuthHandler: NextApiHandler = async (req, res) => {
  const { password } = (await JSON.parse(req.body)) as AuthHandlerBody;

  if (password === process.env.PASSWORD) {
    res.status(200).json(true);
  } else {
    res.status(401).json(false);
  }
};

export default AuthHandler;
