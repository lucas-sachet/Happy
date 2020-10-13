import { Router } from 'express';
const routes = Router();

import OrphanagesController from './Controllers/OrphanagesController';

routes.get('/orphanages', OrphanagesController.index);
routes.post('/orphanages', OrphanagesController.create);

export default routes;