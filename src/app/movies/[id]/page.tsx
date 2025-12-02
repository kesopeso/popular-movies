import { BackButton } from '@/components/back-button';
import { MovieHeaderBackdrop } from '@/components/movie-details/movie-header-backdrop';
import { ThemeToggler } from '@/components/theme/theme-toggler';
import { Badge } from '@/components/ui/badge';
import { getMovieById } from '@/repositories/movie-repository';

type MovieDetailsProps = {
    params: Promise<{ id: number }>;
};

export default async function MovieDetails({ params }: MovieDetailsProps) {
    const { id } = await params;
    const [movieDetails, err] = await getMovieById(id);

    if (!!err) {
        throw err;
    }

    return (
        <>
            <div className="relative">
                <MovieHeaderBackdrop imageUrl={movieDetails.backdropUrl} />

                <div className="container mx-auto p-2 md:p-5">
                    <div className="mb-2 flex w-full justify-between md:mb-5">
                        <BackButton />
                        <ThemeToggler />
                    </div>

                    <header className="pt-36 pb-12">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                            {movieDetails.title}
                        </h1>

                        <p className="mt-2 text-muted-foreground">
                            {movieDetails.tagline}
                        </p>

                        <div className="mt-2 flex flex-wrap gap-2">
                            {movieDetails.genres.map((g) => (
                                <Badge key={g.id} variant="genre">
                                    {g.name}
                                </Badge>
                            ))}
                        </div>
                    </header>
                </div>
            </div>

            <div className="container mx-auto mb-36 p-2 md:p-5">
                {JSON.stringify(movieDetails)}
            </div>
        </>
    );
}
