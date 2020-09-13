import PageWrap from "../PageWrap";
import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../styles/Write.css";
import { uploadImageCallBack } from "../../library/functions";

class Write extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange(editorState) {
    this.setState({
      editorState,
    });
  }

  render() {
    const { editorState } = this.state;
    const post = this.props.match.params.category;
    return (
      <PageWrap>
        <div id="container">
          <div>{post}</div>
          <div>
            <label for="title" id="titleLabel">
              제목
            </label>
            <input id="title" type="text"></input>
          </div>
          <Editor
            editorState={editorState}
            wrapperClassName="wrapper"
            editorClassName="editor"
            toolbarClassName="toolbar"
            onEditorStateChange={this.onEditorStateChange}
            toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
              image: {
                uploadCallback: uploadImageCallBack,
              },
            }}
          />
          <div id="sumitbar">
            <button id="sumit">등록</button>
          </div>
          <textarea
            disabled
            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          />
        </div>
      </PageWrap>
    );
  }
}

export default Write;
