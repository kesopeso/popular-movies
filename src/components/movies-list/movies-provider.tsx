'use client';

import * as React from 'react';
import { MovieInfo } from '@/repositories/movie-repository';
import { MoviesContext, useMoviesContext } from '@/hooks/useMoviesContext';

type MoviesProviderProps = {
    initialMovies: MovieInfo[];
    children: React.ReactNode;
};

function MoviesProvider({ initialMovies, children }: MoviesProviderProps) {
    const ctx = useMoviesContext(initialMovies);

    return (
        <MoviesContext.Provider value={ctx}>{children}</MoviesContext.Provider>
    );
}

export { MoviesProvider, MoviesContext };
