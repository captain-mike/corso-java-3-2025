import React, { useEffect, useState } from 'react'
import PizzaTable from './components/PizzaTable'
import PizzaForm from './components/PizzaForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [pizze, setPizze] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);


  async function handleDelete(id){
    setPizze(pizze => {
      return pizze.filter(p => p.id != id)
    });
  }

  function handleAdd(newPizza){
    setPizze(pizze => [...pizze, newPizza])
  }

  async function getPizzas() {
    
    try{

      const response = await fetch("http://localhost:3000/pizze")
      
      if(!response.ok) throw new Error(response.statusText);

      return await response.json()
      
    }catch(err){
      console.error(err);
    }

  }

  useEffect(()=>{

    getPizzas()
    .then(pizze => setPizze(pizze))

  }, [])

  return (
    <>
      <div className="container">
        <h1>Gestione pizze</h1>

        <div>
          <h2>Crea Pizza</h2>
          <PizzaForm onCreate={handleAdd}></PizzaForm>
        </div>


        <div>
          <h2>Lista pizze</h2>
          <PizzaTable onSelectPizza={setSelectedPizza} onDelete={handleDelete} pizze={pizze}></PizzaTable>
        </div>

        {selectedPizza && <div>
          <h2>Modifica pizza</h2>
          <PizzaForm onEdit={handleAdd} selectedPizza={selectedPizza}></PizzaForm>
        </div>}
      </div>
    </>
  )
}

export default App
