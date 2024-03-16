import { Router, Request, Response, query } from "express";

const router = Router();

router.get('/', (req: Request, res:Response)=>{
    let age: number = 90;
    let showOld:boolean = false;
    
    if (age < 50) {
        showOld = true;
    }

    res.render('pages/home', {
        user : 'jr',
        showOld,
        products:[
            {title: 'Produto X', price:10},
            {title: 'Produto Y', price:11},
            {title: 'Produto Z', price:15}
        ],
        frase:[
            'frase teste',
            'frase teste outra linha'
        ]
    });
});

router.get('/noticia/:slug', (req: Request, res:Response)=>{
    let slug: string = req.params.slug;
    res.send(`Notícia: ${slug}`);
});

router.get('/voo/:origem-:destino', (req: Request, res:Response)=>{
    let {origem, destino} = req.params;
    res.send(`Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`);
});

router.get('/contato', (req: Request, res:Response)=>{   
    res.render('pages/contato',{ user : 'jr'});
});

router.get('/sobre', (req: Request, res:Response)=>{   
    res.render('pages/sobre',{ user : 'jr'});
});

router.get('/nome', (req: Request, res:Response)=>{ 
    let nome: string = req.query.nome as string  
    res.render('pages/nome',{nome});
});

export default router;