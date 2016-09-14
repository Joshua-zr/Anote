import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';
import Radium from 'radium';

class Editor extends Component {

  handleSubmit(event) {
    event.preventDefault();
    //
  }

  render () {
    let styles = {
      card: {// TODO: 宽度随着浏览器的宽度逐渐变化，最大600px
        textAlign: 'center',
        width: '600px',
        marginBottom: '30px',
      },
      input: {
        fontSize: '17px',
        fontWeight: '600',
        width: '94%',
        border: 'none',
        outline: 'none',
        margin: '0 auto -7px'
      },
      textarea: {
        width: '94%',
        margin: '-7px auto 0',
        border: 'none',
        outline: 'none',
      },
      buttons: {
        textAlign: 'left',
        marginLeft: '5px',
      },
      button: {
        position: 'relative',
        bottom: '8px',
        left: '300px',
      }
    }
    return (
      <Paper style={styles.card}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextField
            ref="title"
            type="text"
            style={styles.input}
            hintText="Title"
            underlineShow={false}/>
          <TextField
            ref="noteText"
            type="text"
            style={styles.textarea}
            hintText="Take a note"
            multiLine={true}
            underlineShow={false}/>
          <div style={styles.buttons}>
            <IconButton tooltip='Remind Me'>
              <ActionHome />
            </IconButton>
            <IconButton tooltip='Change color'>
              <ActionHome />
            </IconButton>
            <IconButton tooltip='Add image'>
              <ActionHome />
            </IconButton>
            <IconButton tooltip='Archive'>
              <ActionHome />
            </IconButton>
            <FlatButton
              type='submit'
              style={styles.button} label="DONE"/>
          </div>
        </form>
      </Paper>
    );
  }
}

export default Radium(Editor);
