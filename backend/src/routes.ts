import { Router } from 'express';
const routes = Router();

import OrphanagesController from './Controllers/OrphanagesController';

routes.post('/orphanages', OrphanagesController.create);

export default routes;