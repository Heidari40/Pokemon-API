import { PokemonGrid } from "@/components/pokemon-grid";
import {getPokemonList} from "@/lib/PokemonIPA"


export default async function Home() {

  const pokemonList = await getPokemonList();

// Load in data.
// we can pass data to client component.
// Text input: filter the pokemon cards under it:
// When text is inputted -> filter through our current pokemon data.
// ("use client") PokemonGrid -> ( Text input, shwing all the cards that are the result of the search)

// we are going o get data for the 151 piemon from a server component.

// pass the dta to pokemonGrid

// 1.Create pokemonGrid (And more components)
// 2.Load in data from pokemon API (151 pokemon)
// 3.Pass in data to pokemonGrid, show all the pokemon from API acall.


  return (
    <div className="min-h-screen p-3 pb-10 gap-16 sm:p-20 justify-items-center font-[family-name:var(--font-geist-sans)]">
       
       
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start justify-center items-center">
        <h2 className="text-2xl text-bold">Pokemon Game</h2>
        <div className="mb-32  grid text-center lg:mb-0 lg:rid-cols-4 lg:text-left">
          
         <PokemonGrid pokemonList={pokemonList}/>
          
            
          
        </div>
      </main>
     
    </div>
  );
}
