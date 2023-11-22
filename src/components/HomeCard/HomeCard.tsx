import { Card } from "react-bootstrap";
import './HomeCard.css';

const HomeCard = () => {
    return (
        <Card className="mi-card">
          <Card.Body className="mi-card-body">
            <div className="texto-izquierdo">
                <h2 className="text-h2">El Buen Sabor</h2>
                <h3 className="text-h3">Argentina, Mendoza</h3>
                <p>Tu local de comida rápida favorito</p>
            </div>
            <div className="imagen-derecha">
              <img
                src=""
                alt="Descripción de la imagen"
                className="imagen-pequena"
              />
            </div>
          </Card.Body>
        </Card>
      );
}

export default HomeCard;