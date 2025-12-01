import { tmdbApiAuthToken, tmdbApiBaseUrl } from '@/lib/env';
import z from 'zod';

const MovieSchema = z.object({
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

const MoviesSchema = z.object({
    page: z.number().int(),
    results: z.array(MovieSchema),
    total_pages: z.number().int(),
    total_results: z.number().int(),
});

export type Movie = z.infer<typeof MovieSchema>;

export type Movies = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};

function fetchFromTmdbApi(path: string) {
    return fetch(`${tmdbApiBaseUrl}${path}`, {
        headers: {
            Authorization: `Bearer ${tmdbApiAuthToken}`,
        },
    });
}

export async function getMovieById(
    id: number,
): Promise<[Movie, null] | [null, any]> {
    try {
        const response = await fetchFromTmdbApi(`/movie/${id}`);
        const responseJson = await response.json();
        const moviesResponse = MovieSchema.parse(responseJson);
        return [moviesResponse, null];
    } catch (err) {
        return [null, err];
    }
}

export async function getPopularMovies(): Promise<
    [Movies, null] | [null, any]
> {
    try {
        const response = await fetchFromTmdbApi(
            `/discover/movie?sort_by=popularity.desc`,
        );
        const responseJson = await response.json();
        const moviesResponse = MoviesSchema.parse(responseJson);
        return [moviesResponse, null];
    } catch (err) {
        return [null, err];
    }
}
