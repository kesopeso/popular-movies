function getEnvironmentVariable(varName: string) {
    if (!process.env[varName]) {
        throw new Error(`variable ${varName} is not defined`);
    }
    return process.env[varName];
}

const tmdbApiBaseUrl = getEnvironmentVariable('TMDB_API_BASE_URL');

const tmdbApiAuthToken = getEnvironmentVariable('TMDB_API_AUTH_TOKEN');

export { tmdbApiBaseUrl, tmdbApiAuthToken };
