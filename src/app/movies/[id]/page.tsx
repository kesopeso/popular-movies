import { BackButton } from '@/components/movie-details/back-button';
import { MovieAdditionalInfo } from '@/components/movie-details/movie-additional-info';
import { MovieFinancialInfo } from '@/components/movie-details/movie-financial-info';
import { MovieHeaderBackdrop } from '@/components/movie-details/movie-header-backdrop';
import { MovieHeaderTitle } from '@/components/movie-details/movie-header-title';
import { MovieOverview } from '@/components/movie-details/movie-overview';
import { MovieProductionCompanies } from '@/components/movie-details/movie-production-companies';
import { MovieStats } from '@/components/movie-details/movie-stats';
import { ThemeToggler } from '@/components/theme/theme-toggler';
import { getMovieById } from '@/repositories/movie-repository';

export const dynamic = 'force-dynamic';

type MovieDetailsProps = {
    params: Promise<{ id: number }>;
};

export default async function MovieDetails({ params }: MovieDetailsProps) {
    const { id } = await params;
    const [movieDetails, err] = await getMovieById(id);

    if (!!err) {
        throw err;
    }

    const {
        backdropUrl,
        title,
        tagline,
        genres,
        rating,
        votes,
        year,
        originalLanguage,
        runtime,
        overview,
        budget,
        revenue,
        productionCompanies,
        status,
        originalTitle,
        releaseDate,
        homepage,
    } = movieDetails;

    return (
        <>
            <div className="relative">
                <MovieHeaderBackdrop imageUrl={backdropUrl} />

                <div className="container mx-auto px-2 pt-2 md:px-5 md:pt-5">
                    <div className="mb-2 flex w-full justify-between md:mb-5">
                        <BackButton />
                        <ThemeToggler />
                    </div>

                    <div className="mt-48 mb-12">
                        <MovieHeaderTitle
                            title={title}
                            tagline={tagline}
                            genres={genres}
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto mb-36 px-2 pb-2 md:px-5 md:pb-5">
                <div className="mb-12">
                    <MovieStats
                        rating={rating}
                        votes={votes}
                        year={year}
                        runtime={runtime}
                        originalLanguage={originalLanguage}
                    />
                </div>

                <div className="mb-12">
                    <MovieOverview overview={overview} />
                </div>

                <div className="mb-12">
                    <MovieFinancialInfo budget={budget} revenue={revenue} />
                </div>

                {productionCompanies.length > 0 && (
                    <div className="mb-12">
                        <MovieProductionCompanies
                            productionCompanies={productionCompanies}
                        />
                    </div>
                )}

                <MovieAdditionalInfo
                    status={status}
                    originalTitle={originalTitle}
                    releaseDate={releaseDate}
                    homepage={homepage}
                />
            </div>
        </>
    );
}
