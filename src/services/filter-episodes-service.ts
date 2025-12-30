import { IncomingMessage } from "http";
import { repoPodcast } from "../repositories/podcasts-repository";
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<FilterPodcastModel> => {
    // Definindo o formato de resposta
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    };

    // Buscando os dados no repositório
    const queryString = podcastName?.split("?p=")[1] ?? '';
    const data = await repoPodcast(queryString);

    // Validação
    if (data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = StatusCode.NO_CONTENT;
    }

    responseFormat.body = data;

    return responseFormat;
}