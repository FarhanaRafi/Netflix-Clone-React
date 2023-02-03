import { Component } from "react";
import SingleCard from "./SingleCard";
import { Row, Col } from "react-bootstrap";

class CardSet extends Component {
  state = {
    search: this.props.search,
    title: this.props.title,
    cards: [],
  };
  fetchCards = async () => {
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=bcef6f96&s=" + this.props.search
    );
    console.log(response);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      this.setState({
        cards: data.Search.slice(0, 6),
      });
    }
  };

  componentDidMount() {
    this.fetchCards();
  }
  render() {
    return (
      <>
        <h2 className="text-white mx-4">{this.state.title}</h2>
        <Row className="mt-3 mx-3">
          {this.state.cards.map((item) => {
            return (
              <Col xs={6} md={4} lg={2} key={item.imdbID}>
                <SingleCard card={item} />;
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default CardSet;
