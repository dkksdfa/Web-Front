import PageWrap from "./PageWrap";
import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../styles/Write.css";
import { firestore } from "../firebase";

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
const sortFunction = (a, b) => {
  if (a.link > b.link) return 1;
  if (a.link < b.link) return -1;
  return 0;
};
async function aa(post, clubname) {
  console.log(post);
  console.log(clubname);
  await firestore
    .collection("clubs")
    .doc("fast car")
    .collection("categorys")
    .find((i) => i === post)
    .find((i) => i === clubname)
    .collection("articles")
    .update({ 히히: "ss" });
  // .then((aaa) => console.log(aaa));
}

class Write extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorsetStStateChange: Function = (editorState) => {
    this.ate({
      editorState,
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
            <button id="sumit" onClick={() => aa(post, clubname)}>
              등록
            </button>
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
