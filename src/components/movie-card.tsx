import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

function MovieCard() {
    const posterUrl = '/poster.jpg';
    const title = 'Movie title';
    const genre = 'Action';
    const year = 2024;
    const rating = 9.3;

    return (
        <Link href="/" className="group">
            <Card className="transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/10">
                <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-t from-background/90 via-transparent to-transparent transition-all sm:aspect-[2/3]">
                    <Image
                        className="transition-transform duration-300 group-hover:scale-110 sm:object-cover"
                        src={posterUrl}
                        alt={title}
                        fill={true}
                    />
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                        {genre}
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
