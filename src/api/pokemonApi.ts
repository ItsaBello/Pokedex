export function getPokemonIdFromUrl(url: string) {
    const parts = url.split('/')
    const id = parts[parts.length - 2]
    return parseInt(id);
}

export function getPokemonImgUrl(id: number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}