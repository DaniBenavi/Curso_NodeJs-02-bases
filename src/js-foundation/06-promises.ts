import { httpClientPlugin as http } from '../plugins/http-client.plugin.js'

export const getPokemonById = async (id: string | number): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  const pokemon = await http.get(url)

  return pokemon.name
}
