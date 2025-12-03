import { getEnv } from '@/lib/env';
import { formatCurrency, formatDate } from '@/lib/i18n';
import { formatMinutes } from '@/lib/time';
import { getGenreNameById } from '@/repositories/genres-repository';
import { getBackdropUrl, getPosterUrl } from '@/repositories/images-repository';
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

export type MovieInfo = {
    id: number;
    title: string;
    posterUrl: string;
    genres: string[];
    rating: number;
    year: number;
};

export type MovieDetails = {
    id: number;
    title: string;
    backdropUrl: string;
    tagline: string;
    genres: {
        id: number;
        name: string;
    }[];
    rating: number;
    votes: number;
    year: number;
    runtime: string;
    originalLanguage: string;
    overview: string;
    budget: string;
    revenue: string;
    productionCompanies: {
        id: number;
        name: string;
        originCountry: string;
    }[];
    status: string;
    originalTitle: string;
    releaseDate: string;
    homepage: string;
};

export async function getMovieById(
    id: number,
): Promise<[MovieDetails, null] | [null, Error]> {
    try {
        const response = await fetchFromTmdbApi(`/movie/${id}`);
        const responseJson = await response.json();
        const movieResponse = MovieDetailsResponseSchema.parse(responseJson);

        const movie: MovieDetails = {
            id: movieResponse.id,
            title: movieResponse.title,
            backdropUrl: getBackdropUrl(movieResponse.backdrop_path),
            tagline:
                movieResponse.tagline ||
                `${movieResponse.overview.substring(0, 50)}...`,
            genres: movieResponse.genres,
            rating: movieResponse.vote_average,
            votes: movieResponse.vote_count,
            year: movieResponse.release_date.getFullYear(),
            runtime: formatMinutes(movieResponse.runtime),
            originalLanguage: movieResponse.original_language.toUpperCase(),
            overview: movieResponse.overview,
            budget: formatCurrency(movieResponse.budget),
            revenue: formatCurrency(movieResponse.revenue),
            productionCompanies: movieResponse.production_companies.map(
                (pc) => ({
                    id: pc.id,
                    name: pc.name,
                    originCountry: pc.origin_country,
                }),
            ),
            status: movieResponse.status,
            originalTitle: movieResponse.original_title,
            releaseDate: formatDate(movieResponse.release_date),
            homepage: movieResponse.homepage,
        };

        return [movie, null];
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

        const movies = moviesResponse.results.map((m) => ({
            id: m.id,
            title: m.title,
            posterUrl: getPosterUrl(m.poster_path),
            genres: m.genre_ids
                .map((gId) => getGenreNameById(gId))
                .filter((g): g is string => !!g),
            rating: m.vote_average,
            year: m.release_date.getFullYear(),
        }));

        return [movies, null];
    } catch (err) {
        return [null, err as Error];
    }
}

function fetchFromTmdbApi(path: string) {
    const tmdbApiBaseUrl = getEnv('TMDB_API_BASE_URL');
    const tmdbApiAuthToken = getEnv('TMDB_API_AUTH_TOKEN');

    return fetch(`${tmdbApiBaseUrl}${path}`, {
        headers: {
            Authorization: `Bearer ${tmdbApiAuthToken}`,
        },
    });
}
