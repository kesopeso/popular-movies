import { tmdbApiAuthToken, tmdbApiBaseUrl } from '@/lib/env';
import z from 'zod';

const MovieInfoResponseSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string(),
    genre_ids: z.array(z.number().int()),
    id: z.number().int(),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string(),
    release_date: z
        .string()
        .regex(
            /^\d{4}-\d{2}-\d{2}$/,
            'Invalid date format, expected YYYY-MM-DD',
        )
        .transform((dateStr) => {
            const date = new Date(dateStr);
            if (isNaN(date.getTime())) {
                throw new Error(`Invalid date: ${dateStr}`);
            }
            return date;
        }),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number().int(),
});

const MoviesInfoResponseSchema = z.object({
    page: z.number().int(),
    results: z.array(MovieInfoResponseSchema),
    total_pages: z.number().int(),
    total_results: z.number().int(),
});

const MovieDetailsResponseSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string(),
    belongs_to_collection: z
        .object({
            id: z.number().int(),
            name: z.string(),
            poster_path: z.string(),
            backdrop_path: z.string(),
        })
        .nullable(),
    budget: z.number(),
    genres: z.array(
        z.object({
            id: z.number().int(),
            name: z.string(),
        }),
    ),
    homepage: z.string(),
    id: z.number().int(),
    imdb_id: z.string(),
    origin_country: z.array(z.string()),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string(),
    production_companies: z.array(
        z.object({
            id: z.number().int(),
            logo_path: z.string().nullable(),
            name: z.string(),
            origin_country: z.string(),
        }),
    ),
    production_countries: z.array(
        z.object({
            iso_3166_1: z.string(),
            name: z.string(),
        }),
    ),
    release_date: z
        .string()
        .regex(
            /^\d{4}-\d{2}-\d{2}$/,
            'Invalid date format, expected YYYY-MM-DD',
        )
        .transform((dateStr) => {
            const date = new Date(dateStr);
            if (isNaN(date.getTime())) {
                throw new Error(`Invalid date: ${dateStr}`);
            }
            return date;
        }),
    revenue: z.number(),
    runtime: z.number().int(),
    spoken_languages: z.array(
        z.object({
            english_name: z.string(),
            iso_639_1: z.string(),
            name: z.string(),
        }),
    ),
    status: z.string(),
    tagline: z.string().nullable(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number().int(),
});

export type MovieInfo = z.infer<typeof MovieInfoResponseSchema>;

export type MovieDetails = z.infer<typeof MovieDetailsResponseSchema>;

function fetchFromTmdbApi(path: string) {
    return fetch(`${tmdbApiBaseUrl}${path}`, {
        headers: {
            Authorization: `Bearer ${tmdbApiAuthToken}`,
        },
    });
}

export async function getMovieById(
    id: number,
): Promise<[MovieDetails, null] | [null, Error]> {
    try {
        const response = await fetchFromTmdbApi(`/movie/${id}`);
        const responseJson = await response.json();
        const movieResponse = MovieDetailsResponseSchema.parse(responseJson);
        return [movieResponse, null];
    } catch (err) {
        return [null, err as Error];
    }
}

export async function getPopularMovies(): Promise<
    [MovieInfo[], null] | [null, Error]
> {
    try {
        const response = await fetchFromTmdbApi(
            `/discover/movie?sort_by=popularity.desc`,
        );
        const responseJson = await response.json();
        const moviesResponse = MoviesInfoResponseSchema.parse(responseJson);
        return [moviesResponse.results, null];
    } catch (err) {
        return [null, err as Error];
    }
}
