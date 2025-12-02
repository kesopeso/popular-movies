import { MovieDetails } from '@/repositories/movie-repository';
import { Card, CardContent } from '@/components/ui/card';

type MovieAdditionalInfoProps = Pick<
    MovieDetails,
    'status' | 'originalTitle' | 'releaseDate' | 'homepage'
>;

function MovieAdditionalInfo({
    status,
    originalTitle,
    releaseDate,
    homepage,
}: MovieAdditionalInfoProps) {
    return (
        <Card className="border-border bg-card/50">
            <CardContent className="space-y-2 p-4 text-sm">
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-right font-medium text-foreground">
                        {status}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-muted-foreground">
                        Original Title:
                    </span>
                    <span className="text-right font-medium text-foreground">
                        {originalTitle}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-muted-foreground">Release Date:</span>
                    <span className="text-right font-medium text-foreground">
                        {releaseDate}
                    </span>
                </div>

                {!!homepage && (
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Homepage:</span>
                        <a
                            href={homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-right font-medium text-primary hover:underline"
                        >
                            Visit
                        </a>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

export { MovieAdditionalInfo };
