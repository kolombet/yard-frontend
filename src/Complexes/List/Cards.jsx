import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import Card from './Card';

class Cards extends Component {
  static getExternalImageUrl(image) {
    return image
      ? `https://s3-eu-central-1.amazonaws.com/yard-images/${image.id}`
      : 'http://via.placeholder.com/500x350';
  }

  constructor() {
    super();
    this.state = { complexes: [] };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch('https://yard.moscow/api/v1/complexes').then(response => response.json()).then((json) => {
      this.setState({
        complexes: json.items,
      });
    });
  }

  render() {
    return (
      <Grid>
        {this.state.complexes.map(complex =>
          (<Card
            key={complex.id}
            id={complex.id}
            location={complex.location.subLocalityName}
            name={complex.name}
            description="Ipsum lorem"
            image={this.getExternalImageUrl(complex.image)}
          />),
        )}
      </Grid>
    );
  }
}

export default Cards;
