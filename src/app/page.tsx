import { MovieGrid } from '@/components/movie-grid';
import { SearchBar } from '@/components/search-bar';
import { getPopularMovies } from '@/repositories/movie-repository';

export default async function Home() {
    const [movies, err] = await getPopularMovies();
    console.log('this is the result', movies, err);
    console.log('result');

    return (
        <main>
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

                {!!movies ? (
                    <MovieGrid movies={movies.results} />
                ) : (
                    <div>TODO - load movies error occured. {err}</div>
                )}
            </section>
        </main>
    );
}
