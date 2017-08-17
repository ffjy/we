import React, { Component } from 'react'
import MyTop from './Top'
import MyFooter from './Footer'
import {
  Cells, Cell, CellsTitle,
  CellBody, CellFooter
} from 'react-weui'
import Back from './Back'
import './Exercise.css'
class Exercise extends Component {
  render() {
    return (
      <div className="exercise">
        <MyTop>
          <Back />
          <h1>通关练习</h1>
        </MyTop>
        <div className="exercise-main">
          <div className="now">
            <CellsTitle>今日通关</CellsTitle>
            <Cells>
              <Cell access>
                <CellBody>第十次通关xxxxxxxxx</CellBody>
                <CellFooter />
              </Cell>
            </Cells>
          </div>
          <div className="old">
            <CellsTitle>往期通关</CellsTitle>
            <Cells>
              <Cell access>
                <CellBody>第一次通关联系-宇宙中啥快递哈开机动画</CellBody>
                <CellFooter />
              </Cell>
              <Cell access>
                <CellBody>第二次通关练习----xxxxx</CellBody>
                <CellFooter />
              </Cell>
            </Cells>
          </div>
        </div>
        <MyFooter />
      </div>
    )
  }
}

export default Exercise