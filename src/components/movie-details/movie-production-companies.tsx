import { MovieDetails } from '@/repositories/movie-repository';
import { Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type MovieProductionCompaniesProps = Pick<MovieDetails, 'productionCompanies'>;

function MovieProductionCompanies({
    productionCompanies,
}: MovieProductionCompaniesProps) {
    return (
        <div>
            <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold text-foreground">
                <Building2 className="h-5 w-5" />
                Production Companies
            </h2>

            <div className="flex flex-wrap gap-4">
                {productionCompanies.map((pc) => (
                    <Card key={pc.id} className="border-border bg-card/50">
                        <CardContent className="p-4">
                            <p className="font-medium text-foreground">
                                {pc.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {pc.originCountry}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export { MovieProductionCompanies };
