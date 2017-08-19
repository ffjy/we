import React, { Component } from 'react'
import { 
  Select, Page,
  FormCell, CellHeader,
  Grids, Icon
} from 'react-weui'
import { Link } from 'react-router-dom'
import './Main.css'
import MyTop from './Top'
import MyFooter from './Footer'

import * as storage from '../utils/store'

class Main extends Component {

  constructor() {
    super()
    this.state = {
      navs: [{
          icon: <Link to="/exercise"><Icon value="success" /></Link>,
          label: '通关练习'
      }, {
        icon: <Icon value="warn" />,
        label: '错题集'
      }, {
        icon: <Icon value="waiting"/>,
        label: '模考'
      }, {
          icon: <Link to={"/knowledge"}><Icon value="download" /></Link>,
          label: '考点解析'
      }, {
        icon: <Icon value="circle"/>,
        label: '我的'
      }, {
        icon: <Icon value="search" />,
        label: '其它功能敬请期待'
      }]
    }
  }

  async _fetchData(url) {
    let data = await fetch(url)
    return data.json()
  }

  handleChange(e) {
    if (this.props.index === e.target.value) return
    window.localStorage.setItem('index', e.target.value)
    this.props.change_schedule_index(e.target.value)
  }

  render() {
    return (
      <Page>
        <MyTop>
          <div className="select">
            <FormCell select selectPos="before">
              <CellHeader>
                <Select onChange={this.handleChange.bind(this)} defaultValue={storage.get('index') || this.props.schedule.index}>
                    {
                      this.props.schedule.options.map((option, index) => {
                        return <option value={index} key={option.id}>{option.name}</option>
                      })
                    }
                </Select>
              </CellHeader>
            </FormCell>
          </div>
          <h1>非凡高考冲刺营</h1>
        </MyTop>
        <div className="navs">
          <Grids data={this.state.navs} />
        </div>
        <MyFooter />
      </Page>
    )
  }
}

export default Main