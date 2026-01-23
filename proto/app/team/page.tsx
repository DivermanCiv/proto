'use client'

import Image from "next/image"
import Team from "../../public/data/zineurs.json"
import { useState } from "react"


export default function Page() {    

    const [isMobile, setIsMobile] = useState(window.innerWidth < 720)

    const Card = (key: string, value: any) => {
        
        return(
        <div key={key} className="my-12 flex flex-row">
            <div>
            {value.avatar && 
                <Image src={`/data/avatars/${value.avatar}`} alt={`avatar ${value.name}`} 
                    width={isMobile ? 100 : 300} height={isMobile ? 100 : 300}/>}
            </div>
            <div>
                <p className="font-bold">{value.name}</p>
                <p>{value.content}</p>  
                {value.instagram && <a href={`https://www.instagram.com/${value.instagram}`}>
                    <img src={`/icons/instagram.svg`} alt={'instagram'} height={50} width={50}/>
                </a>}
            </div>

            
            
        </div>
        )
    }

    return <div>
        <h1>Les Zineurses</h1>
        <div>{Object.entries(Team).map(([key, value]) => Card(key, value))}</div>
        </div>
  }