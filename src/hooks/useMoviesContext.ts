import { MovieInfo } from '@/repositories/movie-repository';
import { createContext, useMemo, useState } from 'react';

type MoviesProviderContext = {
    movies: MovieInfo[];
    setFilter: (filter: string) => void;
};

const MoviesContext = createContext<MoviesProviderContext>({
    movies: [],
    setFilter: () => {},
});

function useMoviesContext(initialMovies: MovieInfo[]): MoviesProviderContext {
    const [filter, setFilter] = useState('');

    const ctx = useMemo(() => {
        const trimmedFilter = filter.trim().toLowerCase();
        const movies = initialMovies.filter(
            (m) => m.title.toLowerCase().indexOf(trimmedFilter) !== -1,
        );
        return { movies, setFilter };
    }, [initialMovies, filter]);

    return ctx;
}

export { MoviesContext, useMoviesContext };
