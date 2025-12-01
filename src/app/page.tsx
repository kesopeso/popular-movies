import { SearchBar } from '@/components/search-bar';

export default function Home() {
    return (
        <main>
            <header className="mb-12 text-center">
                <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">
                    Discover Movies
                </h1>
                <p className="text-muted-foreground">
                    Search and explore popular films
                </p>
            </header>

            <div className="mx-auto mb-12 max-w-2xl">
                <SearchBar />
            </div>
        </main>
    );
}
