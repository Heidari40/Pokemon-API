"use client"
import { PokemonCard } from "./pokemon-card"
import {useState} from "react"
import {Label} from "./ui/label"
import {Input} from "./ui/input"

interface Pokemon {
    name:string;
    url:string;
}
interface PokemonGridProps {
   pokemonList: Pokemon[];
}


export function PokemonGrid({pokemonList}: PokemonGridProps){
    const [searchText, setSearchText] = useState("");
    console.log(pokemonList)

    //filter the text
    //{name: "pikachu", url:""}
    

    return(
        <>
        <div>
            <h3 className="text-2xl py-6 text-center">Search For Your pokemon!</h3>
            <div className="grid w-full max-w-sm items-center p-3 gap-1.5">

            <Label htmlFor="pokemonName">Pokemon Name</Label>
            <Input
                   type="text"
                   autoCapitalize="off"
                   value={searchText}
                   id="pokemonName" 
                   placeholder="Charizard, pikachu, etc."
                   onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
        </div>

         <div className="mb-32 grid grid-cols-1 text-sm  sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5 text-center lg:rid-cols-4 pt-5 text-center lg:text-left ">
              {pokemonList.filter((pokemon)=>
              pokemon.name.toLowerCase().includes(searchText.toLowerCase())
              )
                .map((pokemon) => {
                    return(
                        <PokemonCard key={pokemon.name + "Card"} name={pokemon.name}/>
                    )
                })}

        </div>

        </>
    )
}


///Her jeg har installer -> npx shadcn@latest add input og npx shadcn@latest add label
