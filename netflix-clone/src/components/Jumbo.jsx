import { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";

class Jumbo extends Component {
  render() {
    return (
      <>
        <Jumbotron
          fluid
          className="jumbo"
          style={{
            backgroundImage: `url("https://www.allaboutcats.ca/wp-content/uploads/sites/235/2022/03/shutterstock_320462102-2500-e1647917149997.jpg")`,
            backgroundSize: "cover",
            width: "100",
          }}
        >
          <Container>
            <h1>Cat</h1>
          </Container>
        </Jumbotron>
      </>
    );
  }
}

export default Jumbo;
