import { Component } from "react";
import CardSet from "./CardSet";

class AllCards extends Component {
  render() {
    return (
      <>
        <CardSet search="harry%20potter" title="Harry Potter Series" />
        <CardSet search="matrix" title="Matrix" />
        <CardSet search="spider-man" title="Spider Man" />
        <CardSet search="marvel" title="Marvel Universe" />
      </>
    );
  }
}

export default AllCards;
