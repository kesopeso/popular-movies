import { Card, CardContent } from '@/components/ui/card';
import { MovieDetails } from '@/repositories/movie-repository';
import { Calendar, Clock, Globe, Star } from 'lucide-react';

type MovieStatsProps = Pick<
    MovieDetails,
    'rating' | 'votes' | 'year' | 'runtime' | 'originalLanguage'
>;

function MovieStats({
    rating,
    votes,
    year,
    runtime,
    originalLanguage,
}: MovieStatsProps) {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Card className="border-border bg-card/50">
                <CardContent className="flex items-center gap-3 p-4">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <div>
                        <p className="text-2xl font-bold text-foreground">
                            {rating}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            {votes} votes
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-border bg-card/50">
                <CardContent className="flex items-center gap-3 p-4">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                        <p className="text-lg font-bold text-foreground">
                            {year}
                        </p>
                        <p className="text-xs text-muted-foreground">Release</p>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-border bg-card/50">
                <CardContent className="flex items-center gap-3 p-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                        <p className="text-lg font-bold text-foreground">
                            {runtime}
                        </p>
                        <p className="text-xs text-muted-foreground">Runtime</p>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-border bg-card/50">
                <CardContent className="flex items-center gap-3 p-4">
                    <Globe className="h-5 w-5 text-primary" />
                    <div>
                        <p className="text-lg font-bold text-foreground">
                            {originalLanguage}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Language
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export { MovieStats };
