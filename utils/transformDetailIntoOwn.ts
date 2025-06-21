import buildImageUrl from './buildImageUrl'
import type { PokemonResult, PokemonDetailResponse, PokemonOnType } from '~/types/api/response.type'
import type { OwnPokemon } from '~/types/pokemon.types'

type PokemonData = PokemonResult | PokemonDetailResponse | PokemonOnType

const transformDetailIntoOwn = (pokemonData: PokemonData, apiBaseUrl: string): OwnPokemon => {
  let pokemonSpriteUrl: string | undefined = undefined

  if ('sprites' in pokemonData && pokemonData.sprites?.other?.['official-artwork']?.front_default) {
    pokemonSpriteUrl = pokemonData.sprites.other['official-artwork'].front_default
  }

  return {
    name: pokemonData.name,
    url: `${apiBaseUrl}/pokemon/${pokemonData.name}`,
    types: 'types' in pokemonData ? pokemonData.types : [],
    spriteUrl: pokemonSpriteUrl ?? buildImageUrl('url' in pokemonData ? pokemonData.url : ''),
    stats: 'stats' in pokemonData ? pokemonData.stats : [],
  }
}

export default transformDetailIntoOwn
