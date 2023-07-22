import CarouselBS from 'react-bootstrap/Carousel';

function Carousel() {
  return (
    <CarouselBS>
      <CarouselBS.Item>
        <img width="600" height="400"
          className="d-block w-100"
          src="img/carousel/cabelos1.jpg"
          alt="First slide"
        />
        <CarouselBS.Caption>
          <h3>Cabelos Volumosos</h3>
          <p>Produtos para obter volume sem friz</p>

        </CarouselBS.Caption>
      </CarouselBS.Item>
      <CarouselBS.Item>
        <img width="600" height="400"
          className="d-block w-100"
          src="img/carousel/cabelos2.jpg"
          alt="Second slide"
        />

        <CarouselBS.Caption>
          <h3>Cabelos Brilhosos</h3>
          <p>Produtos para manter o máximo de brilho e hidratação</p>
        </CarouselBS.Caption>
      </CarouselBS.Item>
      <CarouselBS.Item>
        <img width="600" height="400"
          className="d-block w-100"
          src="img/carousel/cabelos3.jpg"
          alt="Third slide"
        />

        <CarouselBS.Caption>
          <h3>Cabelos Macios</h3>
          <p>
          Produtos para manter o cabelo nutrido e macio
          </p>
        </CarouselBS.Caption>
      </CarouselBS.Item>
      <CarouselBS.Item>
        <img width="600" height="400"
          className="d-block w-100"
          src="img/carousel/cabelos4.jpg"
          alt="Third slide"
        />

        <CarouselBS.Caption>
          <h3>Cabelos Coloridos</h3>
          <p>
          Produtos para ter o melhor da cor mantendo o cabelo saudável
          </p>
        </CarouselBS.Caption>
      </CarouselBS.Item>     
    </CarouselBS>   
  );
}

export default Carousel;