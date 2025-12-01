const imagesConfiguration = {
    base_url: 'http://image.tmdb.org/t/p/',
    secure_base_url: 'https://image.tmdb.org/t/p/',
    backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
    logo_sizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
    poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
    profile_sizes: ['w45', 'w185', 'h632', 'original'],
    still_sizes: ['w92', 'w185', 'w300', 'original'],
};

export function getPosterUrl(imagePath: string) {
    const baseUrl = imagesConfiguration.secure_base_url;
    const imageSize =
        imagesConfiguration.poster_sizes[
            imagesConfiguration.poster_sizes.length - 2
        ];
    const pathSeparator = imagePath.startsWith('/') ? '' : '/';
    return `${baseUrl}${imageSize}${pathSeparator}${imagePath}`;
}
