import React, { Component } from 'react';
import HomeSlider from './presenter';

class Container extends Component {
  constructor(props){
    super(props);
    this.state = {
      properties: [],
      property: [],
    }
  }
  componentWillMount() {
    const { properties } = this.props;
    this.setState({
      properties: properties,
      property: properties[6]
    })
  }
  goToNextSlide = () => {
    const { property, properties } = this.state;
    const newIndex = property.index+1;
    this.setState({
      property: properties[newIndex]
    })
  }
  goToPrevSlide = () => {
    const { property, properties } = this.state;
    const newIndex = property.index-1;
    this.setState({
      property: properties[newIndex]
    })
  }

  render() {
    const {
      properties, property
    } = this.state;
    const {
      goToNextSlide, goToPrevSlide
    } = this;
    return (
      <HomeSlider 
        properties={properties}
        property={property}
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
      />
    )
  }
}

export default Container;