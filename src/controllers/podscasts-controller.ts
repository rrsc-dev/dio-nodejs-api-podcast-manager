import { IncomingMessage, ServerResponse } from 'http';

import {serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-types';
import { FilterPodcastModel } from '../models/filter-podcast-model';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content: FilterPodcastModel = await serviceListEpisodes();

    res.writeHead(content.statusCode, {
        'content-type': 'application/json'
    }); // Protocolo http formado por cabeçalho e corpo, onde o cabeçalho traz metadados sobre a requisição ou resposta, como tipo de conteúdo, status, etc.
    
    res.write(JSON.stringify(content.body));
    res.end(); // Usado como um ponto final
}

// import e export só são usados com o type module no package.json, mas com o typescript não é necessário usar o type module, pois o tsc já faz a transpilação para commonjs automaticamente

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    // const queryString = req.url?.split("?p=")[1] ?? ''; // removido porque o controller não deve ter lógica de negócio

    const content: FilterPodcastModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, {
        'content-type': ContentType.JSON
    });

    res.write(JSON.stringify(content.body));
    res.end();
}