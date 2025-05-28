import { getPokemon } from "@/lib/PokemonIPA";
import Image from "next/image";
import { PokemonImage } from "@/components/ui/pokemon-image";


// interface Props {
//   params: { pokemonName: string };
//   searchParams?: { [key: string]: string | string[] | undefined };
// }

// export default async function PokemonPage({ params }: Props) {
//   try {
//     const { pokemonName } = params;

    // if (!pokemonName || typeof pokemonName !== "string") {
    //   throw new Error("Invalid Pokémon name");
    // }
//  }
 type Props = {
  params: { pokemonName: string };
};

export default async function PokemonPage({ params }: Props) {
  const { pokemonName } = params; // <-- Bemærk små bogstaver

  const pokemon = await getPokemon(pokemonName.toLowerCase());

 return(
   <div>
    <h1 className="text-3xl font-bold capitalize text-center">{pokemon.name}</h1>

        {/* Tjekker step-for-step om hver property findes i pokemon-objektet
        Optional chaining (?.) detalje */}
        <div className="m-4 " style={{position: "relative", width:'300px', height: '300px'}}>
          {pokemon.sprites?.other?.['official-artwork']?.front_default && (
        <PokemonImage
          image={pokemon.sprites.other['official-artwork'].front_default}
          name={`Official artwork of ${pokemon.name}`}
      />
      
      )}
          
        {/* </div>
        <h3>weight: {pokemon.weight}</h3>
        <div className="flex-col">
          {pokemon.stats.map((pokemon: any) =>{
            return(

            )
          })}
        </div> */}
      
   </div>
 )
}
    
{/* 
// npx shadcn@latest add progress: {
// Konfigurerer den automatisk med:

// TypeScript-support

// Stylet med Tailwind CSS

// Accessibility (a11y)-venlig} */}
