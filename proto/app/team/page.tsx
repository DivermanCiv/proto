import Image from "next/image"
import Header from "../pages/header"
import Team from "../../public/data/zineurs.json"

export default function Page() {

    console.log(Team);
    

    const Card = (key: string, value: any) => {
        
        return(
        <div key={key}>
            <Image src={`/data/avatars/${value.name}.png`} alt={`avatar ${value.name}`} width={300} height={300}/>
            <p className="bold">{value.name}</p>
            <p>{value.content}</p>

        </div>
        )
    }

    return <div>
        <h1>Les Zineurses</h1>
        <div>{Object.entries(Team).map(([key, value]) => Card(key, value))}</div>
        </div>
  }