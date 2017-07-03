import React, {Component} from 'react';

class BuildingInfoTitle extends Component {
  render() {
    return (
      <div className="info-main-block">
        <h2 className="info-main-title">{this.props.title}<br/>
          <small className="info-main-description">{this.props.description}</small>
        </h2>
      </div>
    );
  }
}

export default BuildingInfoTitle;