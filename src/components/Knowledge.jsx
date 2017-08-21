import React, { Component } from 'react'
import { Article, Cells, CellsTitle, Cell, CellHeader, CellBody, CellFooter, } from 'react-weui'
import { Link } from 'react-router-dom'
import Top from './Top'
import Back from './Back'
import Footer from './Footer'
import * as storage from '../utils/store'
import './Knowledge.css'

class Knowledge extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    componentWillMount() {
        const { schedule } = this.props
        const index = storage.get('index') || schedule.index
        const id = this.props.match.params.id
        this._setData(id, index)
    }

    componentWillReceiveProps(nextProps) {
        const id = nextProps.match.params.id
        const index = storage.get('index')
        this._setData(id, index)
    }

    _setData(id, index) {
        console.log('excute')
        let _this = this
        if (typeof id !== 'undefined') {
            _this._fetchData('http://172.16.1.231:3001/schedule')
                .then(data => {
                    let d = data[index]
                    d = _this._findObj(d, id)
                    if (d) {
                        _this.setState({
                            data: d
                        })
                    }
                })
        } else {
            _this._fetchData('http://172.16.1.231:3001/schedule')
                .then(data => {
                    let d = data[index]
                    if (d) {
                        _this.setState({
                            data: d
                        })
                    }
                })
        }
    }

    _findObj(obj, id) {
        if (Array.isArray(obj)) {
            let filters = obj.filter(item => this._findObj(item, id))
            return filters
        } else if (typeof obj === 'object' && obj) {
            if (obj.id === id) return obj
            for (let key in obj) {
                let res = this._findObj(obj[key], id)

                if (typeof res === 'object' && !Array.isArray(res)) {
                    return res
                } else if (Array.isArray(res) && res.length > 0) {
                    return res[0]
                }
            }
        }
    }

    async _fetchData(url) {
        let res = await fetch(url)
        return res.json()
    }

    render() {
        const schedule = this.props.schedule.options[this.props.schedule.index]
        return (
            <div className="knowledge">
                <Top>
                    <Back />
                    <h1>考点 ({ this.state.data && this.state.data.name })</h1>
                </Top>

                <div className="knowledge-main">
                    <CellsTitle>{ this.state.data && this.state.data.name }---目录</CellsTitle>
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
