import Button from 'material-ui/Button'
import CheckIcon from 'material-ui-icons/Check'
import CloseIcon from 'material-ui-icons/Close'
import teal from 'material-ui/colors/teal'
import IconButton from 'material-ui/IconButton'
import classNames from 'classnames'
import React, { Component } from 'react'
import SendIcon from 'material-ui-icons/Send'
import Snackbar from 'material-ui/Snackbar'
import TextField from 'material-ui/TextField'
import { CircularProgress } from 'material-ui/Progress'
import { withStyles } from 'material-ui/styles'

const hasInvalidFields = fields => {
  const requiredFields = ['name', 'email', 'message']
  return !fields
    .filter(field => requiredFields.indexOf(field.name) >= 0)
    .reduce((prev, field) => prev && !!field.value, true)
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  containerToRight: {
    justifyContent: 'flex-end',
  },
  icon: {
    color: theme.palette.common.white,
  },
  iconToRight: {
    marginLeft: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    flex: 1,
  },
  textFieldPhone: {
    flex: 0.75,
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: teal[500],
    '&:hover': {
      backgroundColor: teal[700],
    },
  },
  fabProgress: {
    color: theme.palette.secondary[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: teal[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
})

class ContactForm extends Component {
  constructor(...rest) {
    super(...rest)
    this.state = {
      open: false,
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleSend = this.handleSend.bind(this)
    this.send = this.send.bind(this)
  }

  render() {
    const { classes } = this.props
    const { loading, message, open, success } = this.state
    const buttonClassname = classNames({
      [classes.buttonSuccess]: success,
    })

    return (
      <form
        id="gform"
        className={classes.columnContainer}
        ref={el => {
          this.form = el
        }}
      >
        <TextField
          required
          className={classes.textField}
          label="name"
          margin="normal"
          name="name"
        />
        <div className={classes.rowContainer}>
          <TextField
            required
            className={classes.textField}
            label="email"
            margin="normal"
            name="email"
            type="email"
          />
          <TextField
            className={classNames(classes.textField, classes.textFieldPhone)}
            label="phone"
            margin="normal"
            name="phone"
            type="tel"
          />
        </div>
        <TextField
          multiline
          required
          className={classes.textField}
          label="message"
          margin="normal"
          name="message"
          rows={4}
        />
        <div
          className={classNames(classes.rowContainer, classes.containerToRight)}
        >
          <div className={classes.wrapper}>
            <Button
              fab
              className={buttonClassname}
              color="primary"
              onClick={this.handleSend}
            >
              {success ? (
                <CheckIcon className={classes.icon} />
              ) : (
                <SendIcon
                  className={classNames(classes.icon, classes.iconToRight)}
                />
              )}
            </Button>
            {loading && (
              <CircularProgress size={68} className={classes.fabProgress} />
            )}
          </div>
        </div>
        <Snackbar
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="accent"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          autoHideDuraction={2000}
          onRequestClose={this.handleClose}
          open={open}
          message={message}
        />
      </form>
    )
  }

  handleClose() {
    this.setState({
      open: false,
    })
  }

  handleSend() {
    const alreadySent = this.state.success
    if (alreadySent) {
      return
    }
    const fields = Array.from(
      this.form.querySelectorAll('input').values(),
    ).concat([this.form.querySelector('textarea')])
    if (hasInvalidFields(fields)) {
      this.setState({
        open: true,
        message: 'Please enter all required fields',
        success: false,
      })
      return
    }
    this.setState(
      {
        loading: true,
        success: false,
      },
      () => {
        this.send(fields)
      },
    )
  }

  send(fields) {
    const data = fields.reduce((prev, input) => {
      prev.append(input.name, input.value)
      return prev
    }, new FormData())

    fetch(
      'https://script.google.com/a/andrew.codes/macros/s/AKfycbxbMlRdxhzoKuTZNjtmEMBT5TQeiHq4lNdEmjdLW-Od6DjjagQF/exec',
      {
        method: 'POST',
        body: data,
      },
    )
      .then(() =>
        this.setState({
          message: 'Thank you!',
          open: true,
          loading: false,
          success: true,
        }),
      )
      .catch(error =>
        this.setState({
          message: `Oops, there's been a error: ${error}`,
          open: true,
          loading: false,
          success: false,
        }),
      )
  }
}

export default withStyles(styles)(ContactForm)
