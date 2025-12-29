import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json"); // dirname não funciona com o type module do package.json, uma das soluções é deixar o módulo dinâmico, retirando o type module do package.json

export const repoPodcast = async (): Promise<Podcast[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    const jsonFile = JSON.parse(rawData);

    return jsonFile;
}

