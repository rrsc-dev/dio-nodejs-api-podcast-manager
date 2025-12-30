import { IncomingMessage } from "http";
import { repoPodcast } from "../repositories/podcasts-repository";

export const serviceFilterEpisodes = async (podcastName: string | undefined) => {
    const queryString = podcastName?.split("?p=")[1] ?? '';

    const data = await repoPodcast(queryString);

    return data;
}