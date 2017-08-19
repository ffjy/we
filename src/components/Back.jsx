import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Back.css'
class Back extends  Component {

    historyBack() {
        window.location.pathname = '/'
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
