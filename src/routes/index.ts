import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res:Response)=>{
    
    res.render('home', {user : 'jr'});
});

router.get('/noticia/:slug', (req: Request, res:Response)=>{
    let slug: string = req.params.slug;
    res.send(`Notícia: ${slug}`);
});

router.get('/voo/:origem-:destino', (req: Request, res:Response)=>{
    let {origem, destino} = req.params;
    res.send(`Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`);
});

router.get('/sobre', (req: Request, res:Response)=>{   
    res.send('Pagina sobre');
});

export default router;