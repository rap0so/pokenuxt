const buildImageUrl = (pokemonUrl: string) => {
  const id = pokemonUrl.match('/pokemon/([0-9]+)/')?.[1]
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}

export default buildImageUrl
