import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import kendrick from "../../Images/kendrick.jpg";
import radiohead from "../../Images/download.jpg";
import pink from "../../Images/pink.jpg";
import "../TopBar/style.css";

function IndividualIntervalsExample() {
  const imageStyle = {
    width: "100%",
    height: "671px",
    objectFit: "cover",
  };
  return (
    <Carousel>
      <Carousel.Item interval={2000} style={{ cursor: "pointer" }}>
        <img
          className="d-block w-100"
          src={kendrick}
          alt="First slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h3>Kendrick Lamar</h3>
          <p>To Pimp A Butterfly</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{ cursor: "pointer" }}>
        <img
          className="d-block w-100"
          src={radiohead}
          alt="First slide"
          style={imageStyle}
        />{" "}
        <Carousel.Caption>
          <h3>Radiohead</h3>
          <p style={{ color: "#1956A1" }}>Ok Computer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{ cursor: "pointer" }}>
        <img
          className="d-block w-100"
          src={pink}
          alt="First slide"
          style={imageStyle}
        />{" "}
        <Carousel.Caption>
          <h3>Pink Floyd</h3>
          <p style={{ color: "#FF2A0A" }}>The Dark Side Of The Moon</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
