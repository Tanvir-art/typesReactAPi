import { useEffect, useState } from 'react' 
import './App.css'

function App() {

  type userData = {
    id: number,
    name: string,
    userName: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string
    }
    phone: string,
    website: string
  }

 
  const [data, setData] = useState<userData[]> ([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=> setData(data as userData[]))
  })

  return (
    <>
     <h2 className='text-5xl'>hello</h2>
     {data.map((iteam)=>(<div key={iteam.id} className="bg">
        <p>{iteam.name}</p>
        <p>{iteam.userName}</p>
        <p>{iteam.email}</p>
        <p>{iteam.address.street}</p>
        <p>{iteam.address.suite}</p>
        <p>{iteam.address.city}</p>
        <p>{iteam.phone}</p>
        <p>{iteam.website}</p>
     </div>))}
    </>
  )
}

export default App
