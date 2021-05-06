import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from 'components/MarkdownInput'
import Menu from 'components/Menu'
import NoteDisplay from 'components/NoteDisplay';
import "style.css"

const App = () => {
    const [text, setText] = React.useState('');
    const [title, setTitle] = React.useState('');

    const handleText = (event) => {
      setText(event.target.value);
    }
    const handleSave = () => {
      localStorage.setItem(title, text);
      document.location.reload();
    };

    const handleTitle = (event) => {
      setTitle(event.target.value);
    }

    const handleMenu = (index) => {
      setText(localStorage.getItem(localStorage.key(index)))
      setTitle(localStorage.key(index))
    }


  return (

    <div className="body">
      <div className="Menu">
        <Menu value={handleMenu}/>
      </div>
      <div className="textbody">
        <div className="NoteDisplay">
          <NoteDisplay value={text} titleValue={title} />
        </div>
        <div className="MarkdownInput">
          <h1>Ecrire une note</h1>
          <MarkdownInput handleText={handleText} contentValue={text} titleValue={title} handleTitle={handleTitle} handleSave={handleSave}/>
        </div>
      </div>
    </div>
  )
};

ReactDOM.render(<App /> , document.getElementById('root'))