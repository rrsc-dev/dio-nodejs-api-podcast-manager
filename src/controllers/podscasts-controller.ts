import { IncomingMessage, ServerResponse } from 'http';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {
        'content-type': 'application/json'
    }); // Protocolo http formado por cabeçalho e corpo, onde o cabeçalho traz metadados sobre a requisição ou resposta, como tipo de conteúdo, status, etc.

    res.end(JSON.stringify({
        name: 'test',
    }));
}