import React, { FormEvent, useState } from 'react';

type IObject = {
  parole: Array<String>,
  stampaNome: Function
}

function App() {
  
  const [name, setName] = useState<String>("");

  const [state, setState] = useState<IObject>({
    parole: [],
    stampaNome: stampaNome
  })


  function handleInput(e: any){
    setName(e.target.value)
  }
  console.log(name)

  function stampaNome(this: IObject, name: String){

    let parole: Array<String> = this.parole
    parole.push(name)

    setState((prevState: IObject) => ({
      ...prevState, parole: parole
    }))
  }

  function stampa(this: IObject){
    this.parole.push("ciao")
    alert(this.parole.toString())
  }

  return (
    <div>
      <p>{state.parole.toString()}</p>
      <input onChange={handleInput} />
      <button onClick={() => state.stampaNome(name)}>alert</button>
    </div>
  );
}

export default App;
