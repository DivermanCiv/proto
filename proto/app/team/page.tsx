import Image from "next/image"
import Header from "../pages/header"

export default function Page() {
    const Team = {
        antho: {
            name: "Antho",
            alias: "",
            content: ""
        },
        nima: {
            name: "Nima",
            alias: "",
            content: ""
        }
    }

    const Card = (key: string, value: any) => {
        
        return(
        <div key={key}>
            <Image src={`/avatars/${value.name}.png`} alt={`avatar ${value.name}`} width={100} height={100}/>
            <p>{value.name}</p>
            <p>{value.content}</p>
        </div>
        )
    }

    return <div>
        <h1>Les Zineurses</h1>
        <div>{Object.entries(Team).map(([key, value]) => Card(key, value))}</div>
        </div>
  }