import * as http from 'http';
import { getListEpisodes } from './controllers/podscasts-controller';

const port = process.env.PORT || 3333;

const server = http.createServer( async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if(req.method === 'GET') {
        await getListEpisodes(req, res);
    }
});

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
})