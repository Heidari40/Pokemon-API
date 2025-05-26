
import {getPokemon} from "@/lib/PokemonIPA"
import Image from "next/image";
import { PokemonImage } from "@/components/ui/pokemon-image";
// pokemonName
// PokemonName = "pickachu" -> shoe the pickachu page



export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
    const { pokemonName } = params;


    const pokemonObject = await getPokemon(pokemonName);

    return (
        <div>
            <h1>{pokemonObject.name}</h1>
            <Image
            src={pokemonObject.sprites.other['official-artwork'].front_default}
            alt={"Picture of" + pokemonName}
            width={200}
            height={200}
            
            />
            
        </div>
    );
}


    


