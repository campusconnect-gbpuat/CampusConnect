import { Button, Grid, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React, { useContext, useState } from "react"
import { Modal } from "react-bootstrap"
import { AuthContext } from "../../../context/authContext/authContext"

export const PollModal = ({
  show,
  handleModal,
  modalTitle,
  pollFunction,
  poll,
}) => {
  const authContext = useContext(AuthContext)
  const [title, setTitle] = useState("")
  const [pollBody, setPollBody] = useState("")

  const pollData = {
    user: authContext.user._id,
    title,
    poll: pollBody,
  }
  const handleBtnSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await pollFunction(authContext.user._id, pollData)
      console.log(response)
      handleModal()
    } catch (error) {
      console.log(error.response.data.errorMsg)
    }
  }
  const styleTheme =
    authContext.theme === "dark"
      ? { background: "#121212", color: "whitesmoke" }
      : { background: "white", color: "black" }
  const styleThemeMain =
    authContext.theme === "dark" ? { background: "rgb(0 0 0 / 88%)" } : null

  const useStyles = makeStyles((theme) => ({
    textField: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: styleTheme.color,
        },
        "&:hover fieldset": {
          borderColor: styleTheme.color,
        },
        "&.Mui-focused fieldset": {
          borderColor: styleTheme.color,
        },
      },
      "& .MuiInputLabel-root": {
        color: styleTheme.color,
      },
      "& .MuiInputBase-input": {
        color: styleTheme.color,
      },
    },
  }));

  const classes = useStyles()

  return (
    <Modal show={show} onHide={handleModal} centered style={styleThemeMain}>
      <Modal.Header closeButton style={styleTheme}>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>

      <Modal.Body style={styleTheme}>
        <form onSubmit={handleBtnSubmit}>
          <Grid container justifyContent="space-between" direction="row">
            <Grid item container direction="column">
              <Grid item>
                <TextField
                  className={`mb-3 ${classes.textField}`}
                  variant="outlined"
                  placeholder="Title"
                  size="small"
                  fullWidth
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                  multiline
                  fullWidth
                  className={`mb-3 ${classes.textField}`}
                  variant="outlined"
                  minRows={4}
                  placeholder="Poll"
                  size="small"
                  value={pollBody}
                  onChange={(e) => setPollBody(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Modal.Body>
      <Modal.Footer style={styleTheme}>
        <Button size="small" onClick={handleModal} style={styleTheme}>
          Discard
        </Button>
        <Button type="submit" size="small" onClick={handleBtnSubmit} style={styleTheme}>
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
