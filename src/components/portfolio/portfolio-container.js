import React, { Component } from 'react'

import PortfolioItem from './portfolio-item'

export default class PortfolioContainer extends Component {
  constructor() {
    super()

    this.state = {
      pageTitle: 'Welcome to my Portfolio',
      data: [
        { title: 'Giant', category: 'Grocery', slug: 'giant' },
        { title: 'Catalent', category: 'Biopharma', slug: 'catalent' },
        { title: 'Wholistic', category: 'Healthcare', slug: 'wholistic' },
        { title: 'Verizon', category: 'Communications', slug: ' verizon' },
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
      return <PortfolioItem title={item.title} url={'google.com'} slug={item.slug} />
    })
  }

  render() {
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
