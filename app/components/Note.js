import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import Card from 'material-ui/Card';
import Delete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import moment from 'moment';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleDelete(e) {
    console.log('delete the note');
  }

  handleClose() {
    this.setState({open: false});
  }

  handleOpen() {
    this.setState({open: true});
  }

  render() {
    let styles = {
      root: {
        marginTop: '20px',
      },
      timeAndSetting: {
        textAlign: 'center',
      },
      time: {
        fontSize: '16px',
        padding: '5px',
        fontWeight: '600',
        color: 'rgba(0,0,0,0.5)',
      },
      settings: {
        float: 'right',
        marginTop: '-40px',
      },
      card: {
        width: '550px',
        height: '100%',
        marginTop: '5px',
      },
      text: {
        fontSize: '20px',
        padding: '40px 30px',
      },
      a: {
        textDecoration: 'none',
      }
    }

    const actions = [
      // FlatButton是否有提供状态值区分两个按钮虽然都是会关闭Dialog,但是有不同的执行结果
      <FlatButton
        label="取消"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
        />,
      <FlatButton
        label="确认"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
        />
    ]

    const { note } = this.props;

    return (
      <div style={styles.root}>
        <div style={styles.timeAndSetting}>
          <div style={styles.time}>{moment(note.createdAt).format('YYYY年MM月DD日 A hh:mm')}</div>
          <div>
            <IconButton style={styles.settings} tooltip="SVG Icon" onClick={this.handleOpen.bind(this)}>
              <Delete />
            </IconButton>
            <Dialog
              actions={actions}
              open={this.state.open}
              modal={false}
              onRequireClose={this.handleClose.bind(this)}
              >
              <h3>是否确定？</h3>
              将立即删除您的笔记。此操作无法撤销。
            </Dialog>
          </div>
        </div>
        <Link to={`/edit/${note._id}`} style={styles.a}>
          <Card style={styles.card}>
            <div style={styles.text}>{note.content}</div>
          </Card>
        </Link>
      </div>
    );
  }
}

export default Note;
