import express, {Request, Response } from 'express';
import path from  'path';
import mustashe from 'mustache-express';
import dotenv from 'dotenv';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname,'views'));
server.engine('mustache', mustashe());

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended:true}))

server.use(mainRoutes);

server.use((req: Request, res: Response)=>{
    res.status(404).send(`ERRO: ${res.statusCode} - Pagina não encotrada!`);
});

server.listen(process.env.PORT);
