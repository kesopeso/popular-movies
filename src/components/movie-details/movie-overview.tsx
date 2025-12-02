import { MovieDetails } from '@/repositories/movie-repository';
import { Clapperboard } from 'lucide-react';

type MovieOverviewProps = Pick<MovieDetails, 'overview'>;

function MovieOverview({ overview }: MovieOverviewProps) {
    return (
        <div>
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <Clapperboard className="h-5 w-5" />
                Overview
            </h2>
            <p className="leading-relaxed text-pretty text-foreground">
                {overview}
            </p>
        </div>
    );
}

export { MovieOverview };
