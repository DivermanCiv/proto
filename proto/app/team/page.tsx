'use client'

import Image from "next/image"
import Team from "../../public/data/zineurs.json"
export default function Page() {    
    
    const Card = (key: string, value: {name: string, avatar: string, alias: string, instagram: string, content: string}) => {
        
        return(
            <div>
                <div key={key} className={`my-12 flex flex-col md:flex-row `}>
                    <div className={`flex mr-4 mb-4 h-fit flex-row md:flex-col`}>
                        {value.avatar && <Image className="max-w-[100] mb-2 md:ml-2 rounded-xl" src={`/data/avatars/${value.avatar}`} alt={`avatar ${value.name}`} 
                        width={300} height={300}/>}
                        {value.instagram && <a className="self-end md:self-start" href={`https://www.instagram.com/${value.instagram}`}>
                        <Image src={`/icons/instagram.svg`} alt={'instagram'} height={50} width={50}/>
                        </a>}
                    </div>
                
                    <div>
                        <p className="font-bold mb-3">{value.name}</p>
                        <p>{value.content}</p>  
                    </div>
                </div>
                <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" /> 
            </div>
        
        )
    }

    return <div>
        <h1>Les Zineurses</h1>
        <div>{Object.entries(Team).map(([key, value]) => Card(key, value))}</div>
        </div>
  }