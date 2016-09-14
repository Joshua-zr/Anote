import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import Note from './Note';
import Editor from './Editor';
import Card from 'material-ui/Card';
import notes from '../data/notes_data';

class Notes extends React.Component {

  render() {
    let styles = {
      root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      card: {
        width: '550px',
        height: '550px',
        margin: '10px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media(max-width: 350px)': {
          width: '300px',
          height: '300px'
        },
      },
      text: {
        fontSize: '20px',
        padding: '20px 30px',
      }
    }

    console.log(notes);
    const noteList = notes.map((note, i) => {
      return <Note key={i} note={note} />
    });

    return (
      <div style={styles.root}>
        <Editor />
        {noteList}
      </div>
    );
  }
}

export default Radium(Notes);
