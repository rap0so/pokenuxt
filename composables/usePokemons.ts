export const usePokemons = (offset = 0, limit = 20) => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiBaseUrl;

  if (!apiUrl) {
    throw new Error("API URL is not defined");
  }

  return useFetch(`${apiUrl}?offset=${offset}&limit=${limit}`, {
    key: `pokemons-${offset}-${limit}`, // avoid cache here
  });
};
