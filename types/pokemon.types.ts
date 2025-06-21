import type { PokemonDetailResponse, PokemonResponseTypes } from '~/types/api/response.type'

export type OwnPokemon = {
  spriteUrl: string
  name: string
  url: string
  types?: PokemonResponseTypes[]
  stats?: PokemonDetailResponse['stats']
}
