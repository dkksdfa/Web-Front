import PageWrap from "../PageWrap";
import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../styles/Write.css";
import { firestore } from "../../firebase";
import firebase from "firebase/app";
import { Link } from "react-router-dom";

function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Client-ID 8d26ccd12712fca");
    const data = new FormData();
    data.append("image", file);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

async function aa(post, clubname, title, concent) {
  const path = firestore.collection("clubs").doc(post).collection(clubname);
  path.doc(title).set({
    title: title,
    date: new Date(),
    writer: "이성민",
    conunt: 0,
    views: 0,
    concent: concent,
    comments: [],
  });
}

class Write extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    title: "",
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  titleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  render() {
    const { editorState } = this.state;
    const post = this.props.match.params.category;
    const clubname = this.props.match.params.clubname;
    return (
      <PageWrap>
        <div id="container">
          <div>{post}</div>
          <div>
            <label htmlFor="title" id="titleLabel">
              제목
            </label>
            <input id="title" type="text" onChange={this.titleChange} />
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
            <Link to={`/club/${post}/${clubname}`}>
              <button
                id="sumit"
                onClick={() =>
                  aa(
                    post,
                    clubname,
                    this.state.title,
                    draftToHtml(convertToRaw(editorState.getCurrentContent()))
                  )
                }
              >
                등록
              </button>
            </Link>
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
