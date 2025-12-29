import { repoPodcast } from "../repositories/podcasts-repository";

export const serviceFilterEpisodes = async (podcastName: string) => {
    const data = await repoPodcast(podcastName);

    return data;
}