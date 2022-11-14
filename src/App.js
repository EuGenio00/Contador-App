import Item from "./components/Item";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <h1>Minha primeira aplicação com o React</h1>
      <div>
        <Item>Construir um contador que deve conter:</Item>
        <Item>Um título de sua escolha</Item> 
        <Item>Botão adicionar e remover</Item>
      </div>
      <Card />
    </>
  )
}

export default App;