import {useEffect, useState} from 'react'

const PizzaForm = ({onCreate, onEdit, selectedPizza}) => {

  const [pizza, setPizza] = useState({
    gusto: "",
    prezzo: ""
  })

  useEffect(()=>{
    if(selectedPizza) setPizza(selectedPizza)
  },[])

  const handleChange = (e) => {
    const {name, value} = e.target;

    setPizza({
      ...pizza,
      [name]: value
    })    
  }

  async function addPizza(){
    try{

      const response = await fetch("http://localhost:3000/pizze",{
          method: "POST",
          headers: {"Content-Type":"Application/json"},
          body: JSON.stringify(pizza)
        }
      )
      
      if(!response.ok) throw new Error(response.statusText);

      const newPizza = await response.json()

      onCreate(newPizza)
      
    }catch(err){
      console.error(err);
    }
  }

  async function editPizza(){

    try{

      const response = await fetch(`http://localhost:3000/pizze/${pizza.id}`,{
          method: "PUT",
          headers: {"Content-Type":"Application/json"},
          body: JSON.stringify(pizza)
        }
      )
      
      if(!response.ok) throw new Error(response.statusText);

      const newPizza = await response.json()

      onEdit(newPizza)
      
    }catch(err){
      console.error(err);
    }
  }

  function chooseAction(e){
    e.preventDefault()
    if(!selectedPizza){
      addPizza()
    }else{
      editPizza()
    }
  }

  return (
    <form>
      <input 
      type="text" 
      className="form-control" 
      name='gusto'
      id='gusto'
      value={pizza.gusto}
      onChange={handleChange}
      />  
      <input 
      type="number" 
      className="form-control" 
      name='prezzo'
      id='prezzo'
      value={pizza.prezzo}
      onChange={handleChange}
      />  
      <button onClick={chooseAction} className="btn btn-primary">{selectedPizza ? "Modifica" : "Crea"}</button>
    </form>
  )
}

export default PizzaForm