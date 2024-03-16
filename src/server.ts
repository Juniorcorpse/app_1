import express, {Request, Response } from 'express';
import path from  'path';
import mustashe from 'mustache-express'
import mainRoutes from './routes/index';

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname,'views'));
server.engine('mustache', mustashe());

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended:true}))

server.use(mainRoutes);

server.use((req: Request, res: Response)=>{
    res.status(404).send(`ERRO: ${res.statusCode} - Pagina não encotradaiii`);
});

server.listen(80);
