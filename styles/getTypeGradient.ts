const getTypeGradient = (typeName: string) => {
  // TODO: add more types, but I've already spent too much time on this task
  const map: Record<string, string> = {
    grass: 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)',
    fire: 'linear-gradient(to right, #fee140 0%,#ff3c00 100%)',
    water: 'linear-gradient(to right, #30cfd0 0%,#0099ff 100%)',
    electric: 'linear-gradient(to right, #f7971e 0%, #ffd200 100%)',
    psychic: 'linear-gradient(to right, #fc5c7d 0%, #6a82fb 100%)',
    flying: 'linear-gradient(to right, #ffffff 0%, #3fb2ff 100%)',
    bug: 'linear-gradient(to right,rgb(115, 255, 0) 0%,#0b8300 100%)',
    poison: 'linear-gradient(to right,#e600ff 0%,#ae00ff 100%)',
    default: 'linear-gradient(to right, #a18cd1 0%, #fbc2eb 100%)',
  }

  return map[typeName] || map.default
}

export default getTypeGradient
