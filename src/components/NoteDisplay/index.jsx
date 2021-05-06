import React from 'react';
import MarkdownView from 'react-showdown';

const NoteDisplay = (props) => {

  return (
  <div>
    <div>
      <MarkdownView
      markdown={props.titleValue}
      options={{ tables: true, emoji: true }}/>
    </div>
    <div>
      <MarkdownView
      markdown={props.value}
      options={{ tables: true, emoji: true }}/>
    </div>
  </div>
  )

}


export default NoteDisplay