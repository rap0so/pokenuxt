export type UsePokemonResponseTypes = {
  slot: number
  type: {
    name: string
    url: string
  }
}

export type UsePokemonResponse = {
  results: {
    name: string
    url: string
    types: UsePokemonResponseTypes[]
  }[]
  count: number
  next: string | null
  previous: string | null
}

// TODO: check if this type matches
export type UsePokemonDetailResponse = {
  id: number
  name: string
  height: number
  weight: number
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
    [key: string]: string | null
  }
}
