import { useState } from "react";
import Button from "../Button";

const Card = () => {

    const [valor, setValor] = useState(0);

    const Adicionar = () => {
        return (
            setValor(valor + 1)
        )
    }

    const Remover = () => {
        return (
            setValor(valor - 1)
        )
    }

    return (

        <div className="card">
            <div className="card-header"
                style={{
                    backgroundColor: '#ffa07a',
                    color: '#000'
                }}
            >
                Adicione ou remove 1 ponto no valor abaixo
            </div>
            <div className="card-body">
                <Button
                    className="btn btn-success"
                    onClick={Adicionar}
                >
                    Adicionar
                </Button>
                <Button
                    className="btn btn-danger"
                    onClick={Remover}
                >
                    Remover
                </Button>
                <p style={{
                    fontSize: 50
                }}
                >
                    {valor}
                </p>
            </div>
        </div>

    )
}

export default Card;