import React, { Component } from 'react'

import PortfolioItem from './portfolio-item'

export default class PortfolioContainer extends Component {
  constructor() {
    super()

    this.state = {
      pageTitle: 'Welcome to my Portfolio',
      data: [
        { title: 'Giant', category: 'Grocery' },
        { title: 'Catalent', category: 'Biopharma' },
        { title: 'Wholistic', category: 'Healthcare' },
        { title: 'Verizon', category: 'Communications' },
      ],
    }

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });

  }

  portfolioItems() {
    return this.state.data.map((item) => {
      return <PortfolioItem title={item.title} />
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter('Grocery')}>Grocery</button>
        <button onClick={() => this.handleFilter('Biopharma')}>Biopharma</button>
        <button onClick={() => this.handleFilter('Healthcare')}>Healthcare</button>
        <button onClick={() => this.handleFilter('Communications')}>Communications</button>

        {this.portfolioItems()}
      </div>
    )
  }
}
