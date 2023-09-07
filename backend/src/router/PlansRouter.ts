import { Router } from 'express';
import PlansController from '../controller/PlansController'

const plansController = new PlansController();

const plansRouter = Router();

plansRouter.get('/', (req, res, next) => plansController.getAll(req, res, next));

export default plansRouter;