import { MovieCard } from '@/components/movies-list/movie-card';
import { MovieInfo } from '@/repositories/movie-repository';

type MovieGridProps = {
    movies: MovieInfo[];
};

function MovieGrid({ movies }: MovieGridProps) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-10 xl:grid-cols-5 xl:gap-12">
            {movies.map((m) => (
                <MovieCard key={m.id} movie={m} />
            ))}
        </div>
    );
}

export { MovieGrid };
