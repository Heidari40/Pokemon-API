import { getPokemon,  Stat } from "@/lib/PokemonIPA";
import { PokemonImage } from "@/components/ui/pokemon-image";
// import {Porgress} from "@/components/ui/progress";

 type Props = {
  params: { pokemonName: string };
};


////pokemonName = "pikachu" -> show the pikachu page

export default async function PokemonPage({ params }: Props) {
  const {pokemonName} = params; // <-- Bemærk små bogstaver

  const pokemon = await getPokemon(pokemonName.toLowerCase());

 return(
   <div className="flex flex-col items-center">
    <h1 className="text-3xl font-bold capitalize text-center"> {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>

        {/* Tjekker step-for-step om hver property findes i pokemon-objektet
        Optional chaining (?.) detalje */}
        <div className="m-4" style={{position: "relative", width:'300px', height: '300px'}}>
          {pokemon.sprites?.other?.['official-artwork']?.front_default && (
        <PokemonImage
          image={pokemon.sprites.other['official-artwork'].front_default}
          name={`Official artwork of ${pokemon.name}`}/>
      )}
        </div>
        <h3>weight: {pokemon.weight}</h3>
        <div className="flex-col">
          {pokemon.stats.map((statItem: Stat) =>{
            const statName = statItem.stat.name;
            const statValue = statItem.base_stat;
            return(
              <div className="flex items-stretch" style= {{width:"500px"}} key={statName}>
                <h3 className="p-3 w-2/4">{statName}:{statValue}</h3>
           
                  <progress className="w-2/4 m-auto " value={statValue} max={100} />

              </div>

            )
          })}
        </div>
      
   </div>
 );
}
    
{/* 
// npx shadcn@latest add progress: {
// Konfigurerer den automatisk med:

// TypeScript-support

// Stylet med Tailwind CSS

// Accessibility (a11y)-venlig} */}
