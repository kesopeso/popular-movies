type EnvVarName = 'TMDB_API_BASE_URL' | 'TMDB_API_AUTH_TOKEN';

export function getEnv(varName: EnvVarName) {
    const varValue = process.env[varName];

    if (varValue === undefined) {
        throw new Error(`environment variable ${varName} is not defined`);
    }

    return varValue;
}
