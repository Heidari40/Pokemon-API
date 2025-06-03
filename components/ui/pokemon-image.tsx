"use client"
import Image from "next/image"




export function PokemonImage({image, name}: {image: string, name: string}){
    return(

          <Image
                    src={image}
                    alt={`Official artwork of ${name}`}
                    priority
                    fill ={true}
                    style={{"objectFit": "contain"}}
                    className="transition-opacity  opacity-0 duration-[1s]"
                    onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                  />
    )

}