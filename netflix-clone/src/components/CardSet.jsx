import { Component } from "react";
import SingleCard from "./SingleCard";
import { Row, Col, Spinner, Alert } from "react-bootstrap";

class CardSet extends Component {
  state = {
    search: this.props.search,
    title: this.props.title,
    cards: [],
    isLoading: true,
    isError: false,
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
        isLoading: false,
      });
    } else {
      this.setState({
        isError: true,
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.fetchCards();
  }
  render() {
    return (
      <>
        <h2 className="text-white ">{this.state.title}</h2>
        {this.state.isLoading && (
          <Spinner animation="border" variant="success" />
        )}
        {this.state.isError && (
          <Alert variant="danger">Aww snap, we got an error!</Alert>
        )}
        <Row className="mt-3 ">
          {this.state.cards.map((item) => {
            return (
              <Col xs={4} md={2} lg={2} key={item.imdbID}>
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
