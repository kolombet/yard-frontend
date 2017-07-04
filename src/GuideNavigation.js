import React, { Component } from "react";

class GuideNavigation extends Component {
  render() {
    return (
      <div className="guide-navigation-block">
        <h3 className="guide-navigation-title">
          {this.props.title}
        </h3>
        <p className="guide-navigation-distance-info">
          {this.props.distance}
        </p>
      </div>
    );
  }
}

export default GuideNavigation;
