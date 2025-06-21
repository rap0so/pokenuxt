import buildImageUrl from './buildImageUrl'
import type { PokemonResult, PokemonDetailResponse } from '~/types/api/response.type'
import type { OwnPokemon } from '~/types/pokemon.types'

const transformDetailIntoOwn = (pokemon: PokemonResult | PokemonDetailResponse, apiBaseUrl: string): OwnPokemon => {
  let pokemonSpriteUrl: string | undefined = undefined

  if ('sprites' in pokemon && pokemon.sprites?.other?.['official-artwork']?.front_default) {
    pokemonSpriteUrl = pokemon.sprites.other['official-artwork'].front_default
  }

  return {
    name: pokemon.name,
    url: `${apiBaseUrl}/pokemon/${pokemon.name}`,
    types: pokemon.types,
    spriteUrl: pokemonSpriteUrl ?? buildImageUrl('url' in pokemon ? pokemon.url : ''),
    stats: 'stats' in pokemon ? pokemon.stats : [],
  }
}

export default transformDetailIntoOwn
