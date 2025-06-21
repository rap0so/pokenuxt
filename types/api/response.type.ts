export type UsePokemonResponseTypes = {
  slot: number
  type: {
    name: string
    url: string
  }
}

export type PokemonResult = {
  name: string
  url: string
  types: UsePokemonResponseTypes[]
}

export type UsePokemonResponse = {
  results: PokemonResult[]
  count: number
  next: string | null
  previous: string | null
}

type UsePokemonDetailSpritesOther = {
  front_default: string | null
}

export type UsePokemonDetailResponse = {
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
