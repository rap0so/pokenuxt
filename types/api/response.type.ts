export type PokemonResponseTypes = {
  slot: number
  type: {
    name: string
    url: string
  }
}

export type DefaultResponse<T> = {
  count: number
  next: string | null
  previous: string | null
  results: T
}

export type PokemonResult =
  {
    name: string
    url: string
    types: PokemonResponseTypes[]
  }

export type PokemonResponse = DefaultResponse<PokemonResult[]>

export type PokemonTypes = {
  name: string
  url: string
}

export type PokemonTypesResponse =
  DefaultResponse<PokemonTypes[]>

type UsePokemonDetailSpritesOther = {
  front_default: string | null
}

export type PokemonOnType = {
  name: string
  url: string
}

export type PokemonsOnTypeResponse = {
  pokemon: {
    pokemon: PokemonOnType
    slot: number
  }[]
}

export type PokemonDetailResponse = {
  id: number
  name: string
  height: number
  weight: number
  stats: {
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
  }[]
  abilities: {
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
  }[]
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }[]
  sprites: {
    front_default: string | null
    other: {
      'official-artwork': UsePokemonDetailSpritesOther
      'home': UsePokemonDetailSpritesOther
    }
    [key: string]: string | object | null
  }
}
