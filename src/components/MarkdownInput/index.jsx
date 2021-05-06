import React from 'react';
import 'components/MarkdownInput/style.css'

    const MarkdownInput = (  {handleSave, title, text, handleTitle, handleText}) =>  {



      return (
        <div className="form">
            <input className="titleArea" value={title} onChange={handleTitle} placeholder="Ma première note" />
            <textarea type="textarea"className="textArea" value={text} onChange={handleText} placeholder="Ceci est une note" />
          <div>
            <button onClick={handleSave}>Sauvegarder</button>
          </div>
        </div>
      )
    }

    export default MarkdownInput





// const MarkdownInput = () =>  {
//   const [Allnotes, setAll] = useState('');
//   const [title, setValue] = useState('');
//   const [text, setText] = useState('');

//   const onTitle = (event) => {
//     setValue(event.target.value);
//   };

//   const onText = (event) => {
//     setText(event.target.value);
    
//   };
  
//   const handleSave = () => {
//   localStorage.setItem(title, text);
//   setAll({ ...localStorage });
//   console.log(localStorage.length)
//   console.log(Allnotes)
//   }

//   return (
  
//     <div className="mybody">
//       <div className="Menu">
//         <ul>
//         </ul>
//       </div>
//       <div>
//         <div className="card">
//         <h1>Ecris ta note</h1>
//           <div>
//             <NoteDisplay title={title} value={text} />
//           </div>
//         </div>
//         <div className="form">
//             <input className="titleArea" value={title} onChange={onTitle} placeholder="Ma première note" />
//             <textarea type="textarea"className="textArea" value={text} onChange={onText} placeholder="Ceci est une note" />
//           <div>
//             <button onClick={handleSave}>Sauvegarder</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default MarkdownInput