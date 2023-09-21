import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my Portfolio",
      isLoading: false,
      data: [],
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter((item) => {
        return item.category === filter;
      }),
    });
    // Testing loop function
    // if (filter === 'RESET') {
    //   this.getData();
    // } else {this.getData(filter);}
  }

  getPortfolioItems() {
    axios
      .get("https://mikekwekam.devcamp.space/portfolio/portfolio_items")
      .then((response) => {
        // handle success
        console.log("response data", response);
        this.setState({
          data: response.data.portfolio_items,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
    // .finally(() => {
    //   // always executed
    // });
  }

  //Testing loop function
  // getData(filter = null){
  //     if(filter) {
  //       this.state.data ; {
  //       this.setState({
  //         data: this.state.data.filter(item => {
  //           return item.category === filter;
  //       })})}
  //     }else (

  //       this.setState({
  //         data: this.state.data
  //       })
  //   )
  // }

  portfolioItems() {
    return this.state.data.map((item) => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <button onClick={() => this.handleFilter("Grocery")}>Grocery</button>
        <button onClick={() => this.handleFilter("Biopharma")}>
          Biopharma
        </button>
        <button onClick={() => this.handleFilter("Healthcare")}>
          Healthcare
        </button>
        <button onClick={() => this.handleFilter("Communications")}>
          Communications
        </button>

        {this.portfolioItems()}
      </div>
    );
  }
}
