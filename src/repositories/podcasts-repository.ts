import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json"); // dirname não funciona com o type module do package.json, uma das soluções é deixar o módulo dinâmico, retirando o type module do package.json

export const repoPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    // Função com parâmetro opcional
    const rawData = fs.readFileSync(pathData, "utf-8"); // Lê o arquivo como string
    let jsonFile = JSON.parse(rawData);

    if (podcastName) {
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
    }

    return jsonFile;
}