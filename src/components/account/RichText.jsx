import { useEffect, useState } from 'react';
import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function RichText({ setDescription, description }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(ContentState.createFromText(''))
  );

  setTimeout(() => {}, 2000);

  useEffect(() => {
    const abc = EditorState.createWithContent(
      ContentState.createFromText('3333')
    );
  }, []);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    //setDescription(editorState.getCurrentContent().getPlainText());
  };

  return (
    <div className="formgroup">
      <label>Description</label>

      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
}
