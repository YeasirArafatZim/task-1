import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import slider1 from './img/slider1.jpg';
import slider2 from './img/slider2.jpg';
import img1 from './img/1.gif';
import img2 from './img/2.gif';
import img3 from './img/3.gif';
import { Navbar, Nav, Container, Carousel, Button } from 'react-bootstrap';

function NavBar() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Service &amp; Package</Nav.Link>
              <Nav.Link href="#">Gallery</Nav.Link>
              <Nav.Link href="#">Package</Nav.Link>
              <Nav.Link href="#">FAQ</Nav.Link>
              <Nav.Link href="#"></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}


function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>A Picture is Worth a thousand words</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button variant="outline-danger" id="slider-button">View Gallery</Button>{' '}
          </Carousel.Caption>


        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>A Picture is Worth a thousand words</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button variant="outline-danger" id="slider-button">View Gallery</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

function StairImg() {
  return (
    <div className="newBlock">
      <img className="sImg" style={{ marginLeft: '25%' }} src={img1} alt="Second slide" />
      <img className="sImg" style={{ marginTop: '30px' }} src={img2} alt="Second slide" />
      <img className="sImg" style={{ marginTop: '60px' }} src={img3} alt="Second slide" />
    </div>
  );
}

function AboutUs() {
  return (
    <div className="newBlock px-4" >
      <h2 style={{ textAlign: 'center' }}>About Us</h2>
      <p className='mx-5' style={{ textAlign: 'justify', fontSize: '19px', marginTop: '10%' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto mollitia, nemo nobis explicabo vero repudiandae fugiat voluptatibus neque, optio odio quae natus dolorum ut? Iure laudantium ipsa sint iusto minima provident repellat laborum nostrum! Qui, at, placeat sed tempora saepe, sunt earum dignissimos explicabo distinctio reprehenderit praesentium consequatur sit atque explicabo vero repudiandae fugiat voluptatibus neque, optio odio quae natus dolorum ut? Iure laudantium ipsa .</p>
    </div>
  );
}


function App() {
  return (
    <div>
      <NavBar />
      <Slider />
      <div className="Container">
        <div className="row" style={{ paddingBottom: '20%' }}>
          <div className="col-md-6" style={{ paddingTop: '9%' }}>
            <StairImg />
          </div>

          <div className="col-md-6" style={{ paddingTop: '9%' }}>
            <AboutUs />
          </div>
        </div>


      </div>

    </div>

  );

}

export default App;
