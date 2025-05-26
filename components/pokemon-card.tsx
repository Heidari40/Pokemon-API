import Link from "next/link"

/// pickachu, -> localhost: 300/pickachu

interface PokemonCardProps{
    name: string
}


export function PokemonCard({name}: PokemonCardProps){
    return(
        <Link
            href={name}
            className="rounded-2xl border py-3 border-solid  text-white border-transparent text-center justify-center 
             flex items-center  dark:border-gray-500 m-3 text-background gap-2 hover:bg-[#5f5e5e] dark:boder-gray-500 font-medium  "
            key={name+ "Card"}     
            >

                    <h2 className="mb-3 text-2xl font-semibold p-3">
                       {name.charAt(0).toUpperCase() + name.slice(1)}
                    </h2>
                   
                  </Link>
    )
}