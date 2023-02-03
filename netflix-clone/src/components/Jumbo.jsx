import { Component } from "react";
// import { Jumbotron, Container } from "react-bootstrap";
import React from "react";

class Jumbo extends Component {
  render() {
    return (
      <header style={{ paddingLeft: 0 }}>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://mdbootstrap.com/img/new/slides/041.webp')",
            height: 400,
          }}
        >
          {/* <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          > */}
          <div className="d-flex align-items-center text-white  h-100">
            <h1 className="display-1">Earth</h1>
          </div>
        </div>
      </header>
    );
  }
  //   return (
  //     <>
  //       <Jumbotron
  //         fluid
  //         className="jumbo"
  //         style={{
  //           backgroundImage: `url("https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg")`,
  //           backgroundSize: "cover",
  //           width: "100",
  //         }}
  //       >
  //         <Container>
  //           <h1>Cat</h1>
  //         </Container>
  //       </Jumbotron>
  //     </>
  //   );
}

export default Jumbo;
