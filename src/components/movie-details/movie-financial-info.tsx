import { MovieDetails } from '@/repositories/movie-repository';
import { DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type MovieFinancialInfoProps = Pick<MovieDetails, 'budget' | 'revenue'>;

function MovieFinancialInfo({ budget, revenue }: MovieFinancialInfoProps) {
    return (
        <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-border bg-card/50">
                <CardContent className="p-4">
                    <div className="mb-2 flex items-center gap-2 text-muted-foreground">
                        <DollarSign className="h-4 w-4" />
                        <span className="text-sm font-medium">Budget</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">
                        {budget}
                    </p>
                </CardContent>
            </Card>

            <Card className="border-border bg-card/50">
                <CardContent className="p-4">
                    <div className="mb-2 flex items-center gap-2 text-muted-foreground">
                        <DollarSign className="h-4 w-4" />
                        <span className="text-sm font-medium">Revenue</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">
                        {revenue}
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}

export { MovieFinancialInfo };
