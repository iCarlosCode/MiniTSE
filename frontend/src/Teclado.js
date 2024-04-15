import './styles.css'
function Tecla({texto, cor, cor_texto='', tamanho_fonte='30px', finalizar=() => {}}) {

    function checar(num) {
        fetch('http://127.0.0.1:8000/urnae/checar/' + num)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(candidato => {
            if (candidato == null) {
                document.getElementById('nome').innerHTML = 'NÚMERO ERRADO'
                document.getElementById('partido').innerHTML = 'VOTO NULO'
            }
            else {
                document.getElementById('nome').innerHTML = 'Nome: ' + candidato.nome
                document.getElementById('partido').innerHTML = 'Partido: ' + candidato.partido
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
        var candidato = {"nome":"Lula",
        "partido": "PT",
        "foto":"",
        "votos": 0}
        console.log('Vamos checar o candidato.' + num)
    
        
        
    }
    
    function votar(num) {
      console.log('Vamos votar em ' + num)
      
    }
    function digitar(valor) {
        var input1 = document.getElementById('num1')
        var input2 = document.getElementById('num2')
    
        console.log(input1.value)
        if (input1.value == '')
        {
            input1.value = valor
        }
        else if (input2.value == '')
        {
            input2.value = valor
            checar(input1.value + input2.value);
        }
    }
    
    function teclar(params) {
      var valor = params.target.textContent
      var valorInput1 = document.getElementById('num1').value
      var valorInput2 = document.getElementById('num2').value
      if (valor == 'BRANCO')  {
        document.getElementById('num1').value = ' '
        document.getElementById('num2').value = ' '
        document.getElementById('nome').innerHTML = 'VOTO EM BRANCO'
        document.getElementById('partido').innerHTML = ''

      }
      else if (valor == 'CORRIGE') {
        document.getElementById('num1').value = ''
        document.getElementById('num2').value = ''
        document.getElementById('nome').innerHTML = ''
        document.getElementById('partido').innerHTML = ''
      }
      else if (valor == 'CONFIRMA') {
        finalizar(true)
        votar(valorInput1+valorInput2)
      }
      else {
        digitar(valor)
      }
    }


  return (<div className='Tecla'>
    <button 
        style={{ backgroundColor: cor, color:cor_texto, fontSize: tamanho_fonte}}
    onClick={teclar}>
        {texto}
    </button>
  </div>
  );
}

export default function Teclado({finalizar}) {
    return (
      <div id="Teclado">
        <div className='Linha'>
            <Tecla texto={'1'} cor={'#5c5c5c'}></Tecla>
            <Tecla texto={'2'} cor={'#5c5c5c'}></Tecla>
            <Tecla texto={'3'} cor={'#5c5c5c'}></Tecla>
        </div>

        <div className='Linha'>
            <Tecla texto={'4'} cor={'#5c5c5c'}></Tecla>
            <Tecla texto={'5'} cor={'#5c5c5c'}></Tecla>
            <Tecla texto={'6'} cor={'#5c5c5c'}></Tecla>
        </div>
  
        <div className='Linha'>
            <Tecla texto={'7'} cor={'#5c5c5c'}></Tecla>
            <Tecla texto={'8'} cor={'#5c5c5c'}></Tecla>
            <Tecla texto={'9'} cor={'#5c5c5c'}></Tecla>
        </div>
  
        <div className='Linha'>
        <Tecla texto={'0'} cor={'#5c5c5c'}></Tecla>
        </div>
        <br />
  
        <div className='Linha'>
            <Tecla id='Branco' texto={'BRANCO'} cor={'#FFFFF'} cor_texto={'black'} tamanho_fonte='10px'></Tecla>
            <Tecla id='Corrige' texto={'CORRIGE'} cor={'#ff9b4d'} tamanho_fonte='10px'></Tecla>
            <Tecla id='Confirma' texto={'CONFIRMA'} cor={'#02bc69'} finalizar={finalizar} tamanho_fonte='10px'></Tecla>
        </div>
      </div>
    );
  }