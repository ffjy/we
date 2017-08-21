import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    CellsTitle, Cells, Cell, CellBody, Form, Article,
    Gallery, GalleryDelete, Uploader
} from 'react-weui'
import imgSrc from '../img.jpeg'

class AnswerQ extends Component {

    constructor() {
        super()
        this.state = {
            gallery: false,
            demoFiles: []
        }
    }

    renderGallery() {
        if (!this.state.gallery) return false
        let srcs = this.state.demoFiles.map(file=>file.url)
        return (
            <Gallery
                src={srcs}
                show
                defaultIndex={0}
                onClick={e => {
                    e.preventDefault()
                    e.stopPropagation()
                    this.setState({ gallery: false })
                }}
            >
                <GalleryDelete
                    onClick={(e, id) => {
                        this.setState({
                            demoFiles: this.state.demoFiles.filter((e,i)=>i !== id),
                            gallery: this.state.demoFiles.length <= 1
                        })
                    }}
                />
            </Gallery>
        )
    }

    render() {
        return (
            <div className="question-answer">
                <div className="question-answer-of-chapter">
                    <CellsTitle>第1小题</CellsTitle>
                    <Cells>
                        <Cell>
                            <Article>
                                <h2>Hekllkashdkjah</h2>
                                <img src={imgSrc} alt="" style={{ width: '200px' }}/>
                            </Article>
                        </Cell>
                    </Cells>

                    <div className="question-answer-content">
                        { this.renderGallery() }
                        <Form>
                            <Cell>
                                <CellBody>
                                    <Uploader
                                        title="Image Uploader"
                                        maxCount={6}
                                        files={this.state.demoFiles}
                                        onError={msg => alert(msg)}
                                        onChange={(file,e) => {
                                            let newFiles = [...this.state.demoFiles, {url:file.data}];
                                            this.setState({
                                                demoFiles: newFiles
                                            });
                                        }}
                                        onFileClick={
                                            (e, file, i) => {
                                                console.log('file click', file, i)
                                                this.setState({
                                                    gallery: {
                                                        url: file.url,
                                                        id: i
                                                    }
                                                })
                                            }
                                        }
                                        lang={{
                                            maxError: maxCount => `Max ${maxCount} images allow`
                                        }}
                                    />
                                </CellBody>
                            </Cell>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

AnswerQ.propTypes = {
    // flag: PropTypes.
}

export default AnswerQ
