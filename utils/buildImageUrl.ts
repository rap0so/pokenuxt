const buildImageUrl = (pokemonUrl: string, use3D = false) => {
  const id = pokemonUrl.match('/pokemon/([0-9]+)/')?.[1]
  const threeDUrl = use3D ? '/other/home/' : ''
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${threeDUrl}/${id}.png`
}

export default buildImageUrl
