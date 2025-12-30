import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podscasts-controller';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

const port = process.env.PORT || 3333;

const server = http.createServer( async (req: http.IncomingMessage, res: http.ServerResponse) => {

    // query string
    const [baseUrl, queryString] = req.url?.split("?") ?? [];

    // Listas podcasts
    if(req.method === HttpMethod.GET && req.url === Routes.LIST) {
        await getListEpisodes(req, res);
    }

    if (req.method === HttpMethod.GET && req.url === Routes.EPISODE) {
        await getFilterEpisodes(req, res);
    }
});

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
})

// Quando é algo que possui varias opções, coloca no enum, quando é algo importante que vai ser usado uma vez, pode colocar no env ou const