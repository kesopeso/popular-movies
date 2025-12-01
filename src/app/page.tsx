import { MovieGrid } from '@/components/movie-grid';
import { SearchBar } from '@/components/search-bar';

export default function Home() {
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

                <MovieGrid />
            </section>
        </main>
    );
}
