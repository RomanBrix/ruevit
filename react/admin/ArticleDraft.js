import React, {Component} from 'react';
import {Editor, EditorState, RichUtils, DefaultDraftBlockRenderMap, convertToRaw, convertFromRaw} from 'draft-js';
import Immutable from 'immutable'

export default class ArticleDraft extends Component {
    constructor(props){
        super(props);
        // console.log(convertFromRaw(JSON.parse(props.content)).length);
        this.state = {
            editorState: (()=>{
                if(props.content.length > 20){
                    return EditorState.createWithContent(convertFromRaw(JSON.parse(props.content)));
                }else {
                    return EditorState.createEmpty();
                }
            })()
        };
        // this.onChange = (editorState) => this.setState({editorState});
        // window.scrollTo(0, 0);
    }

    // componentWillReceiveProps(newProps){
    //     console.log('New props: ', newProps);
    //     if(newProps.content.length > 20){
    //         this.setState({
    //             editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(newProps.content)))
    //         })
    //     }
    // }
    onChange(editorState){
        this.setState({editorState});
        const { getContentToSave } = this.props;
        const curContent = this.state.editorState.getCurrentContent();
        getContentToSave(JSON.stringify(convertToRaw(curContent)));
    }
    makeSmth(arg){
        this.onChange(RichUtils.toggleInlineStyle(
            this.state.editorState,
            arg
        ));
    }
    toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }

    render(){
        // const { frontRedux, history, match, arrOfPlan} = this.props;

        const {editorState} = this.state;
        // let className = 'RichEditor-editor';
        // let contentState = editorState.getCurrentContent();
        // if (!contentState.hasText()) {
        //     if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        //         className += ' RichEditor-hidePlaceholder';
        //     }
        // }



        const blockRenderMap = Immutable.Map({

            'unstyled': {
                element: 'div',
                aliasedElements: ['p'],
            }
        });
        const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

        return(
            <div className="article-news">
                <div className="controls">
                    <BlockStyleControls
                        editorState={editorState}
                        onToggle={this.toggleBlockType.bind(this)}
                    />
                    <div className="top">
                        <button onClick={()=>{
                            this.makeSmth('BOLD')
                        }}>Bold</button>
                        <button onClick={()=>{
                            this.makeSmth('ITALIC')
                        }}>Italic</button>
                        <button onClick={()=>{
                            this.makeSmth('UNDERLINE')
                        }}>UnderLine</button>
                        <button onClick={()=>{
                            this.makeSmth('CODE')
                        }}>MonoSpace</button>
                    </div>
                </div>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange.bind(this)}
                    placeholder="Edit Here..."
                    blockRenderMap={extendedBlockRenderMap}
                    // ref="editor"
                    readOnly={false}
                    spellCheck={true}
                />
            </div>
        )
    }
}

const BLOCK_TYPES = [
    {label: 'H1', style: 'header-one'},
    {label: 'H2', style: 'header-two'},
    {label: 'H3', style: 'header-three'},
    {label: 'H4', style: 'header-four'},
    // {label: 'H5', style: 'header-five'},
    // {label: 'H6', style: 'header-six'},
    {label: 'Blockquote', style: 'blockquote'},
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
    // {label: 'Code Block', style: 'code-block'},
    {label: 'Text', style: 'unstyled'},

];
class StyleButton extends React.Component {
    constructor() {
        super();
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }

    render() {
        let className = 'RichEditor-styleButton';
        if (this.props.active) {
            className += ' RichEditor-activeButton';
        }

        return (
            <div className={className} onMouseDown={this.onToggle}>
                {this.props.label}
            </div>
        );
    }
}

const BlockStyleControls = (props) => {
    const {editorState} = props;
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <div className="RichEditor-controls">
            {BLOCK_TYPES.map((type) =>
                <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            )}
        </div>
    );
};
