import { MovieGrid } from '@/components/movie-grid';
import { SearchBar } from '@/components/search-bar';
import { ThemeToggler } from '@/components/theme-toggler';
import { getPopularMovies } from '@/repositories/movie-repository';

export default async function Home() {
    const [movies, err] = await getPopularMovies();

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

            <div className="mx-auto mb-12 max-w-2xl">
                <SearchBar />
            </div>

            <section>
                <h2 className="mb-6 text-2xl font-semibold text-foreground">
                    Popular Movies
                </h2>

                {!!err ? (
                    <div>Error occured: {err.message}</div>
                ) : !movies ? (
                    <div>No movies found</div>
                ) : (
                    <MovieGrid movies={movies} />
                )}
            </section>
        </div>
    );
}
