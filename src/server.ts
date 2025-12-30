import * as http from 'http';
import { app } from './app';


const port = process.env.PORT || 3333;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
})

// Quando é algo que possui varias opções, coloca no enum, quando é algo importante que vai ser usado uma vez, pode colocar no env ou const