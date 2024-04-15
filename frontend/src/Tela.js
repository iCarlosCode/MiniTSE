export default function Tela() {
    var show = false
    return <div className='Tela'>
      <div className='Linha'>
        <p>Numero:</p>
        <input id='num1'></input>
        <input id='num2'></input>
      </div>
      <div>
        <p></p>
        <p id='nome'></p>
      </div>
      <div>
        <p></p>
        <p id='partido'></p>
      </div>

      <hr></hr>
      <p>CONFIRMA para confrimar e CORRIGE para reiniciar.</p>
    </div>
    
  }