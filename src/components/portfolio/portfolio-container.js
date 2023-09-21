import React, { Component } from 'react';
import axios from 'axios';


import PortfolioItem from './portfolio-item'

export default class PortfolioContainer extends Component {
  constructor() {
    super()

    this.state = {
      pageTitle: 'Welcome to my Portfolio',
      isLoading: false,
      data: [
        { title: 'Giant', category: 'Grocery', slug: 'giant' },
        { title: 'Catalent', category: 'Biopharma', slug: 'catalent' },
        { title: 'Wholistic', category: 'Healthcare', slug: 'wholistic' },
        { title: 'Verizon', category: 'Communications', slug: ' verizon' },
      ],
    }

    this.handleFilter = this.handleFilter.bind(this);
    this.getPortfolioItems = this.getPortfolioItems.bind(this);

    
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
    // Testing loop function
    // if (filter === 'RESET') {
    //   this.getData();
    // } else {this.getData(filter);}



  }

  getPortfolioItems() {
    axios.get('https://mikekwekam.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        // handle success
        console.log("response data", response);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
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
      return <PortfolioItem title={item.title} url={'google.com'} slug={item.slug} />
    })
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    this.getPortfolioItems();

    return (
      <div>

        <button onClick={() => this.handleFilter('Grocery')}>Grocery</button>
        <button onClick={() => this.handleFilter('Biopharma')}>Biopharma</button>
        <button onClick={() => this.handleFilter('Healthcare')}>Healthcare</button>
        <button onClick={() => this.handleFilter('Communications')}>Communications</button>
        

        {this.portfolioItems()}
      </div>
    )
  }
}
