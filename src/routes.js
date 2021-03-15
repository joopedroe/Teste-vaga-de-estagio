const express = require('express');
const routes = express.Router();
const NaversController = require('./controllers/naversControllers');
const ProjetosController = require('./controllers/projetoCotrollers');
const Naver_ProdutoController = require('./controllers/naver_projetoController');

//routes.use(authMiddleware);

routes.post('/naver', NaversController.store);
routes.get('/naver/lista', NaversController.index);
routes.get('/naver/find/:id', NaversController.show);
routes.post('/projeto/novo', ProjetosController.store);
routes.get('/projetos/lista', ProjetosController.index);
routes.get('/projeto/find/:id', ProjetosController.show);
routes.post('/naver_Produto', Naver_ProdutoController.store);

module.exports = routes;