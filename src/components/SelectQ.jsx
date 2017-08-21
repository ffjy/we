import React, { Component } from 'react'
import { Form, FormCell, CellBody, CellFooter, Radio, Checkbox } from 'react-weui'
import PropTypes from 'prop-types'
import './Question.css'
class Select extends Component {

    constructor() {
        super()
        this.state = {
            type: 'radio' // or 'checkbox'
        }
    }

    render() {
        return (
            <div className="question-select">
                {
                    this.state.type !== 'radio'
                        ? <Form radio>
                            {
                                this.props.options.map((option, index) =>
                                    <FormCell radio key={index}>
                                        <CellBody>
                                            { `${String.fromCharCode(65+index)}: ${option}` }
                                        </CellBody>
                                        <CellFooter>
                                            <Radio name="radio1" value={index}/>
                                        </CellFooter>
                                    </FormCell>
                                )
                            }
                        </Form>
                        : <Form checkbox>
                            {
                                this.props.options.map((option, index) =>
                                    <FormCell checkbox key={index}>
                                        <CellBody>
                                            { `${String.fromCharCode(65+index)}: ${option}` }
                                        </CellBody>
                                        <CellFooter>
                                            <Checkbox name="checkbox1" value={index} />
                                        </CellFooter>
                                    </FormCell>
                                )
                            }
                        </Form>
                }
            </div>
        )
    }
}

Select.propTypes = {
    type: PropTypes.string, // default is radio
    options: PropTypes.array.isRequired
}

export default Select