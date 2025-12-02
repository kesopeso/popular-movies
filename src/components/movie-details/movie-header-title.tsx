import { MovieDetails } from '@/repositories/movie-repository';
import { Badge } from '@/components/ui/badge';

type MovieHeaderTitleProps = Pick<MovieDetails, 'title' | 'tagline' | 'genres'>;

function MovieHeaderTitle({ title, tagline, genres }: MovieHeaderTitleProps) {
    return (
        <header>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {title}
            </h1>

            <p className="mt-2 text-muted-foreground">{tagline}</p>

            <div className="mt-2 flex flex-wrap gap-2">
                {genres.map((g) => (
                    <Badge key={g.id} variant="genre">
                        {g.name}
                    </Badge>
                ))}
            </div>
        </header>
    );
}

export { MovieHeaderTitle };
