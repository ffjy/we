import React, { Component } from 'react'

import Top from './Top'
import Back from './Back'
import Footer from './Footer'
import Analysis from './Analysis'
import { Article, Flex, FlexItem, Button } from 'react-weui'
import imgSrc from '../img.jpeg'
import SelectQ from './SelectQ'
import FillQ from './FillQ'
import AnswerQ from './AnswerQ'
import PropTypes from 'prop-types'

import './Question.css'

class Question extends Component {

    constructor() {
        super()
        this.state = {
            type: 'answer'
        }
    }

    render() {
        console.log(this.props)
        return (
            <div className="question">
                <Top>
                    <Back />
                    <h1>通关题（）</h1>
                    <Analysis />
                </Top>
                <div className="question-content">
                    <Article>
                        <h2>hejkahdjkha</h2>
                        <img src={imgSrc} style={{ width: '200px' }} alt="" />
                    </Article>
                </div>
                <div className="question-type">
                    {
                        this.state.type === 'fill'
                            ? <FillQ />
                            : this.state.type === 'answer'
                            ? <AnswerQ />
                            : <SelectQ options={['aaa', 'bbb', 'ccc', 'ddd']}/>
                    }

                </div>
                <div className="question-change">
                    <Flex>
                        <FlexItem>
                            <Button >上一题</Button>
                        </FlexItem>
                        <FlexItem />
                        <FlexItem>
                            <Button>下一题</Button>
                        </FlexItem>
                    </Flex>
                </div>
                <Footer />
            </div>
        )
    }
}

Question.propTypes = {
    type: PropTypes.string, // default select。  单选 'select', 简答(填空) 'fill', 解答 'answer'
}

export default Question