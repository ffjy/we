import React, { Component } from 'react'
import { Button } from 'react-weui'
import './Analysis.css'

class Analysis extends Component {
    render() {
        return (
            <div className="analysis">
                <Button size="small" type="default">解析</Button>
            </div>
        )
    }
}

export default Analysis