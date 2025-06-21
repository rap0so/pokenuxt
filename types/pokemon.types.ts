import type { UsePokemonResponseTypes } from '~/types/api/response.type'

export type OwnPokemon = {
  spriteUrl: string
  name: string
  url: string
  types?: UsePokemonResponseTypes[]
}
