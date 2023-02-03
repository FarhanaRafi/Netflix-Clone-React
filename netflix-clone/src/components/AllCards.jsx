import { Component } from "react";
import CardSet from "./CardSet";

class AllCards extends Component {
  //   state = {
  //     search: [],
  //   };
  //   fetchCards = async () => {
  //     let response = await fetch(
  //       "http://www.omdbapi.com/?apikey=bcef6f96&s=harry%20potter"
  //     );
  //     console.log(response);
  //     if (response.ok) {
  //       let data = await response.json();
  //       console.log(data);
  //       this.setState({
  //         search: data.Search,
  //       });
  //     }
  //   };

  componentDidMount() {
    // this.fetchCards();
  }
  render() {
    return (
      <>
        {/* <h2>Lord Of The Rings</h2>
        <Row className="mt-3">
          {this.state.search.map((item) => {
            return (
              <Col xs={6} md={4} lg={3} key={item.imdbID}>
                <SingleCard card={item} />;
              </Col>
            );
          })}
        </Row> */}

        <CardSet search="harry%20potter" title="Harry Potter Series" />
        <CardSet search="lord" title="Lord Of the Rings" />
      </>
    );
  }
}

export default AllCards;
