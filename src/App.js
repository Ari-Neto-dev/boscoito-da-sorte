import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state={};

    this.frases=[ 
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'];
  }


  render(){
    return(
      <div>
     <img src={require('./assets/sorte.png') }alt=""/>
     <Botao/>
     <h3>Frase numero 1 aleatoria...</h3>
      </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <button>Abrir Biscoito</button>

    );
  }
}
export default App;