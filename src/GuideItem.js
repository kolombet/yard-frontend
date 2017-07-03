import React, {Component} from 'react';

class GuideItem extends Component {
  render() {
    return (
      <div className="guide-navigation-block">
        <h3 className="guide-navigation-title">{this.props.title}</h3>
        <p className="guide-navigation-details">{this.props.details}</p>
      </div>
    );
  }
}

export default GuideItem;