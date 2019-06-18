import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Thumb extends Component {
  static propTypes = {
    alt: PropTypes.string,
    title: PropTypes.string,
    classes: PropTypes.string,
    src: PropTypes.string.isRequired,
    srcHover: PropTypes.string.isRequired
  };

  state = {
    isOver:false,
    src: this.props.src
  }

  onMouseOverHandler = () => {
    this.setState({
      src: this.props.srcHover
    })
  }
  
  onMouseOutHandler = () => {
    this.setState({
      src:this.props.src
    })
  }

  render() {
    return (
      <div className={this.props.classes}>
        <img 
          onMouseOver={this.onMouseOverHandler} 
          onMouseOut={this.onMouseOutHandler}
          src={this.state.src} 
          alt={this.props.alt} 
          title={this.props.title} />
      </div>
    );
  }
}

export default Thumb;
