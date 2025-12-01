import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { getPosterUrl } from '@/repositories/images-repository';
import { getGenreNameById } from '@/repositories/genres-repository';

type MovieCardProps = {
    id: number;
    posterPath: string;
    title: string;
    genres: number[];
    year: number;
    rating: number;
};

function MovieCard({
    id,
    posterPath,
    title,
    genres,
    year,
    rating,
}: MovieCardProps) {
    const posterUrl = getPosterUrl(posterPath);
    const genre = genres
        .map((g) => getGenreNameById(g))
        .filter((g) => !!g)
        .join(' / ');

    return (
        <Link href={`/movies/${id}`} className="group mx-4 sm:mx-0">
            <Card className="transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/10">
                <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-t from-primary/10 to-transparent transition-all sm:aspect-[2/3]">
                    <Image
                        className="object-contain object-center transition-transform duration-300 group-hover:scale-110"
                        src={posterUrl}
                        alt={title}
                        fill={true}
                    />
                    <Badge className="absolute top-2 right-2 max-w-9/10 bg-primary text-primary-foreground">
                        <span className="truncate">{genre}</span>
                    </Badge>
                </div>
                <CardContent>
                    <h3 className="line-clamp-1 text-sm font-semibold text-foreground">
                        {title}
                    </h3>
                    <div className="mt-1 flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                            {year}
                        </span>
                        <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-primary text-primary" />
                            <span className="text-xs font-medium text-foreground">
                                {rating}
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}

export { MovieCard };
