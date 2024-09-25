import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
  });

app.use((_req: Request, res: Response) => {return res.status(404).send('This is not the page you\'re looking for')});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const defaultErr: {
    log: string;
    status: number;
    message: { err: string };
  } = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
