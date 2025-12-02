import Image from 'next/image';

type MovieHeaderBackdropProps = {
    imageUrl: string;
};

function MovieHeaderBackdrop({ imageUrl }: MovieHeaderBackdropProps) {
    return (
        <>
            <div className="absolute inset-0 -z-1">
                <Image
                    src={imageUrl}
                    alt="Movie backdrop header image"
                    className="object-cover object-center"
                    fill={true}
                />
            </div>

            <div className="absolute inset-0 -z-1 bg-gradient-to-t from-background from-10% to-background/30 to-90%" />
        </>
    );
}

export { MovieHeaderBackdrop };
