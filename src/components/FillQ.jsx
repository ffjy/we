import React, { Component } from 'react'
import { Form, FormCell, CellHeader, CellBody, Input } from 'react-weui'

class FillQ extends Component {

    render() {
        return (
            <div className="question-fill">
                <Form>
                    <FormCell>
                        <CellHeader style={{ marginRight: '15px' }}>
                            答案:
                        </CellHeader>
                        <CellBody>
                            <Input type="text" placeholder="Please editor it" />
                        </CellBody>
                    </FormCell>
                </Form>
            </div>
        )
    }

}

export default FillQ