import { IncomingMessage, ServerResponse } from 'http';

import {serviceListEpisodes } from '../services/list-episodes-service';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content = await serviceListEpisodes();

    res.writeHead(200, {
        'content-type': 'application/json'
    }); // Protocolo http formado por cabeçalho e corpo, onde o cabeçalho traz metadados sobre a requisição ou resposta, como tipo de conteúdo, status, etc.

    res.end(JSON.stringify(content));
}

// import e export só são usados com o type module no package.json, mas com o typescript não é necessário usar o type module, pois o tsc já faz a transpilação para commonjs automaticamente