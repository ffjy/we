import React, { Component } from 'react'
import { 
  Select, Page, NavBar, NavBarItem,
  Form, FormCell, Cell, CellBody, CellHeader,
  Grids, Icon
} from 'react-weui'
import './Main.css'
import MyTop from './Top'
import MyFooter from './Footer'
import imgSrc from '../timg.jpg'
class Main extends Component {

  constructor() {
    super()
    this.state = {
      navs: [{
        icon: <Icon value="success" />,
        label: '通关练习',
        href: '/exercise'
      }, {
        icon: <Icon value="warn" />,
        label: '错题集',
        href: '#'
      }, {
        icon: <Icon value="waiting"/>,
        label: '模考',
        href: '#'
      }, {
        icon: <Icon value="download" />,
        label: '考点解析',
        href: '#'
      }, {
        icon: <Icon value="circle"/>,
        label: '我的',
        href: '#'
      }, {
        icon: <Icon value="search" />,
        label: '其它功能敬请期待',
        href: '#'
      }]
    }
  }

  render() {
    return (
      <Page>
        <MyTop>
          <div className="select">
            <FormCell select selectPos="before">
              <CellHeader>
                <Select>
                  <option value="地理">地理</option>
                  <option value="英语">英语</option>
                  <option value="技术">技术</option>
                </Select>
              </CellHeader>
            </FormCell>
          </div>
          <h1>非凡高考冲刺营</h1>
        </MyTop>
        <div className="navs">
          <Grids data={this.state.navs} />
        </div>
        <MyFooter></MyFooter>
      </Page>
    )
  }
}

export default Main