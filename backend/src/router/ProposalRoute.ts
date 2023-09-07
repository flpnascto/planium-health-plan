import { Router } from 'express';
import ProposalController from '../controller/ProposalController';

const proposalController = new ProposalController();

const proposalRouter = Router();

proposalRouter.post('/', (req, res, next) => proposalController.createProposal(req, res, next));

export default proposalRouter;