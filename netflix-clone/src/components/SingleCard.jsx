import { Card, CardDeck } from "react-bootstrap";
import { Component } from "react";

class SingleCard extends Component {
  render() {
    return (
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={this.props.card.Poster} height={300} />
          <Card.Body>
            <Card.Title className="book-title">
              {this.props.card.Title}
            </Card.Title>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </CardDeck>
    );
  }
}

export default SingleCard;
