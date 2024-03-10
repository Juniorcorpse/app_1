"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.render('home');
});
router.get('/noticia/:slug', (req, res) => {
    let slug = req.params.slug;
    res.send(`Notícia: ${slug}`);
});
router.get('/voo/:origem-:destino', (req, res) => {
    let { origem, destino } = req.params;
    res.send(`Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`);
});
router.get('/sobre', (req, res) => {
    res.send('Pagina sobre');
});
exports.default = router;
