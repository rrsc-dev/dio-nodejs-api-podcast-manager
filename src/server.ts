import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podscasts-controller';

const port = process.env.PORT || 3333;

const server = http.createServer( async (req: http.IncomingMessage, res: http.ServerResponse) => {

    // query string
    const [baseUrl, queryString] = req.url?.split("?") ?? [];

    // Listas podcasts
    if(req.method === 'GET' && req.url === '/api/list') {
        await getListEpisodes(req, res);
    }

    if (req.method === 'GET' && req.url === '/api/episode') {
        await getFilterEpisodes(req, res);
    }
});

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
})