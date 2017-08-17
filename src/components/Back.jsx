import React, { Component } from 'react'
import './Back.css'
class Back extends  Component {

    historyBack() {
        window.history.back()
    }

    render() {
        return (
            <div className="back" onClick={this.historyBack.bind(this)}>
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
        )
    }
}

export default Back
