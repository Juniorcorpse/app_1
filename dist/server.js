"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const index_1 = __importDefault(require("./routes/index"));
const server = (0, express_1.default)();
server.set('view engine', 'mustache');
server.set('views', path_1.default.join(__dirname, 'views'));
server.engine('mustache', (0, mustache_express_1.default)());
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
server.use(index_1.default);
server.use((req, res) => {
    res.status(404).send(`ERRO: ${res.statusCode} - Pagina não encotradaiii`);
});
server.listen(80);
