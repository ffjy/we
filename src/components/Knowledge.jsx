import React, { Component } from 'react'
import { Article, Cells, CellsTitle, Cell, CellHeader, CellBody, CellFooter, } from 'react-weui'
import { Link } from 'react-router-dom'
import Top from './Top'
import Back from './Back'
import Footer from './Footer'
import './Knowledge.css'

class Knowledge extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    componentWillMount() {

        console.log(window.location.pathname.indexOf('/knowledge/'))
        let path = window.location.pathname.replace('/knowledge/', '')

        console.log(path)
        const { schedule } = this.props
        const index = schedule.index
        let _this = this
        fetch('http://172.16.1.115:3001/schedule')
            .then(data => data.json())
            .then(data => {
                let d = data[index]
                if (d) {
                    _this.setState({
                        data: d
                    })
                }
            })
    }

    render() {
        const schedule = this.props.schedule.options[this.props.schedule.index]
        return (
            <div className="knowledge">
                <Top>
                    <Back />
                    <h1>考点 ({ schedule.name })</h1>
                </Top>

                <div className="knowledge-main">
                    <CellsTitle>{ schedule.name }---目录</CellsTitle>
                    <Cells>
                        {
                            this.state.data && this.state.data.menu && this.state.data.menu.map((m, index) =>
                                <Link to={`/knowledge/${m.id}`} key={m.id}>
                                    <Cell access>
                                        <CellHeader>{m.name}</CellHeader>
                                        <CellBody />
                                        <CellFooter />
                                    </Cell>
                                </Link>
                            )
                        }
                    </Cells>

                    <div className="knowledge-detail">
                        <CellsTitle>讲解</CellsTitle>
                        <Cells>
                            <Article>
                                <div dangerouslySetInnerHTML={{__html: this.state.data ? this.state.data.detail : '' }} />
                            </Article>
                        </Cells>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Knowledge
