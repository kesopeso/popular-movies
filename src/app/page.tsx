import { MovieGrid } from '@/components/movies-list/movie-grid';
import { MoviesProvider } from '@/components/movies-list/movies-provider';
import { SearchBar } from '@/components/movies-list/search-bar';
import { ThemeToggler } from '@/components/theme/theme-toggler';
import { getPopularMovies } from '@/repositories/movie-repository';

export const dynamic = 'force-dynamic';

export default async function Home() {
    const [movies, err] = await getPopularMovies();

    if (!!err) {
        throw err;
    }

    return (
        <div className="container mx-auto mb-36 p-2 md:p-5">
            <div className="mb-2 text-right md:mb-5">
                <ThemeToggler />
            </div>

            <header className="mb-12 text-center">
                <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                    Discover Movies
                </h1>

                <p className="text-muted-foreground">
                    Search and explore popular films
                </p>
            </header>

            <MoviesProvider initialMovies={movies}>
                <div className="mx-auto mb-12 max-w-2xl">
                    <SearchBar />
                </div>

                <div>
                    <h2 className="mb-6 text-2xl font-semibold text-foreground">
                        Popular Movies
                    </h2>

                    <MovieGrid />
                </div>
            </MoviesProvider>
        </div>
    );
}
