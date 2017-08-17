import { Footer, FooterText } from 'react-weui'
import React, { Component } from 'react'
import './Footer.css'
export default class extends Component {
  render() {
    return (
      <div className="footer">      
        <Footer>
          <FooterText>Copyright &copy; 2017-2018 非凡教育</FooterText>
        </Footer>
      </div>
    )
  }
}