import {useState} from 'react'

const Contatore = () => {

    const [count, setCount] = useState(0);

    const incrementa = () =>{
      setCount(count + 1)    
    }

  return (
    <>
    <div>{count}</div>
     <button onClick={incrementa}>Incrementa</button>
    </>
  )
}

export default Contatore