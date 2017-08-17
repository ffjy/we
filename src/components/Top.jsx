import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Top.css'

class Top extends Component {
  render() {
    return (
      <div className="top">
        { this.props.children }
      </div>
    )
  }
}

Top.propTypes = {
  children: PropTypes.any.isRequired
}

export default Top