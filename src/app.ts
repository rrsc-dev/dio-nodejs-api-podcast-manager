import { getFilterEpisodes, getListEpisodes } from './controllers/podscasts-controller';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';
import * as http from 'http';

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {

    // query string
    const baseUrl = req.url?.split("?")[0];

    // Listas podcasts
    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(req, res);
    }

    if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(req, res);
    }
}