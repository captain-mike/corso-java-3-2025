
const PizzaTable = ({pizze, onDelete, onSelectPizza}) => {


  function changePizza(pizza){
    onSelectPizza(()=>{
      setInterval(()=>{
        onSelectPizza(pizza);
      },100)

      return null;
    });
  
  }

  // useEffect(()=>{

  //  console.log('pizze modificato');
   
  // }, [pizze])


  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Gusto</th>
          <th>Prezzo</th>
          <th>Azioni</th>
        </tr>
      </thead>
      <tbody>
        { 
          pizze.map(pizza => {
            const {id, gusto, prezzo} = pizza;
            return (
              <tr key={`tr-pizza-${id}`}>
                <td>{id}</td>
                <td>{gusto}</td>
                <td>{prezzo}</td>
                <td>
                  <button onClick={()=> onDelete(id) } className="btn btn-danger">Elimina</button>
                  <button onClick={() => changePizza(pizza)} className="btn btn-warning">Modifica</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default PizzaTable