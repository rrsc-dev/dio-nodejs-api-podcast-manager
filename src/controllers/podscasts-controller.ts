import { IncomingMessage, ServerResponse } from 'http';

import {serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-types';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content = await serviceListEpisodes();

    res.writeHead(StatusCode.OK, {
        'content-type': 'application/json'
    }); // Protocolo http formado por cabeçalho e corpo, onde o cabeçalho traz metadados sobre a requisição ou resposta, como tipo de conteúdo, status, etc.

    res.end(JSON.stringify(content));
}

// import e export só são usados com o type module no package.json, mas com o typescript não é necessário usar o type module, pois o tsc já faz a transpilação para commonjs automaticamente

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    // const queryString = req.url?.split("?p=")[1] ?? ''; // removido porque o controller não deve ter lógica de negócio

    const content = await serviceFilterEpisodes(req.url);

    res.writeHead(StatusCode.OK, {
        'content-type': ContentType.JSON
    });

    res.end(JSON.stringify(content));
}