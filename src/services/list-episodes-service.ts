import { repoPodcast } from "../repositories/podcasts-repository";
import { FilterPodcastModel } from "../models/filter-podcast-model";

import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<FilterPodcastModel> => {

    // Definindo o formato de resposta
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    };

    const data = await repoPodcast();

    // Validação
    // if (data.length !== 0) {
    //     responseFormat.statusCode = StatusCode.OK;
    // } else {
    //     responseFormat.statusCode = StatusCode.NO_CONTENT;
    // }

    // responseFormat.body = data;

    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    }

    return responseFormat;
}