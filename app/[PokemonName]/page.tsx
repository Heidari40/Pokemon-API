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
    <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
    {/* <PokemonImage
    
    
    /> */}
      
      {pokemon.sprites?.other?.['official-artwork']?.front_default && (
        <Image
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={`Official artwork of ${pokemon.name}`}
          width={300}
          height={300}
          priority
          className="mt-4"
        />
      )}
   </div>
 )
}
    


    // return (
    //   <div className="pokemon-container">
    //     <h1>
    //         {pokemonName}
    //     </h1>


    //     <h3 className="text-3xl font-bold capitalize mb-4">
            
    //       {pokemonObject.name}
    //     </h3>
        
    //     {pokemonObject.sprites?.other?.['official-artwork']?.front_default && (
    //       <div className="relative w-64 h-64">
    //         <Image
    //           src={pokemonObject.sprites.other['official-artwork'].front_default}
    //           alt={`Official artwork of ${pokemonObject.name}`}
    //           fill
    //           className="object-contain"
    //           priority
    //         />
    //       </div>
    //     )}
    //   </div>
    // );

//   } catch (error) {
//     return (
//       <div className="error-message p-4 text-red-500">
//         {error instanceof Error 
//           ? `Error: ${error.message}` 
//           : "An unknown error occurred"}
//       </div>
//     );
//   }
// }