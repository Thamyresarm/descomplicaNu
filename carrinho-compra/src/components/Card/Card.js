import Button from 'react-bootstrap/Button';
import CardBS from 'react-bootstrap/Card';

function Card({id, image, title, description, value, onClick}) {
  return (
    <CardBS>
      <CardBS.Img width={200} variant="top" src={image} />
      <CardBS.Body>
        <CardBS.Title>{title}</CardBS.Title>
        <CardBS.Text>{description}</CardBS.Text>
      </CardBS.Body>
      <CardBS.Footer>
       <p className="text-muted">R$ {value} </p>
        <Button variant="primary" onClick={() => onClick(id, value)}>Add to Cart</Button>
      </CardBS.Footer>
    </CardBS>
  );
}

export default Card;