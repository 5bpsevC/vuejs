import { onMounted, ref } from "vue";
import { GameStatus, Pokemon, PokemonListResponse } from "../interfaces";
import { pokemonApi } from "../api/pokemonApi";

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonOptions = ref<Pokemon[]>([]);

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>("/?limit=151");

    const pokemonsArray = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split("/");
      const id = urlParts.at(-2) ?? 0;
      return {
        name: pokemon.name,
        id: +id,
      };
    });

    return pokemonsArray.sort(() => Math.random() - 0.5);
  };

  onMounted(async () => {
    pokemons.value = await getPokemons();
    // getNextRound();

    console.log(pokemonOptions.value);
  });

  return {
    gameStatus,
  };
};
