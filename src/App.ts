import express, { Request, Response } from 'express';
import plansRouter from './router/PlansRouter';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();
    this.routes();

    this.app.get('/', (req: Request, res: Response) => res.json({ ok: true }));
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', 'Content-Type=application/json');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private routes(): void {
    this.app.use('/plans', plansRouter);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}
