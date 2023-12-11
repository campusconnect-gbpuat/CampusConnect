import { Button, Grid, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React, { useContext, useState } from "react"
import { AuthContext } from "../../../context/authContext/authContext"
import { Modal } from "react-bootstrap"

export const EventModal = ({
    show,
    handleModal,
    eventFunction,
    modalTitle,
    event,
}) => {
    const authContext = useContext(AuthContext)
    const [description, setDescription] = useState(event === undefined ? "" : event.description)
    const [title, setTitle] = useState(event === undefined ? "" : event.title)
    const [date, setDate] = useState(event === undefined ? "" : event.date)
    const [venue, setVenue] = useState(event === undefined ? "" : event.venue)

    const handleForm = async (e) => {
        e.preventDefault()
        event
            ? eventFunction({ description, title, date, venue }, authContext.user._id, event._id)
            : eventFunction({ description, title, date, venue }, authContext.user._id)
        handleModal()
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
        <Modal
            show={show}
            onHide={handleModal}
            centered
            size="lg"
            id="input-modal"
            style={styleThemeMain}
        >
            <Modal.Header closeButton style={styleTheme}>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>

            <Modal.Body style={styleTheme}>
                <form onSubmit={handleForm}>
                    <Grid container justifyContent="space-between" direction="row" spacing={3}>
                        <Grid item container direction="column">
                            <Grid item>
                                <TextField
                                    className={`mb-3 ${classes.textField}`}
                                    variant="outlined"
                                    placeholder="Title"
                                    size="small"
                                    value={title}
                                    fullWidth
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <TextField
                                    minRows={5}
                                    fullWidth
                                    multiline
                                    variant="outlined"
                                    placeholder="Describe the event..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className={classes.textField}
                                />
                                <TextField
                                    className={`mt-3 ${classes.textField}`}
                                    variant="outlined"
                                    placeholder="Date"
                                    size="small"
                                    value={date}
                                    fullWidth
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                <TextField
                                    className={`mt-3 ${classes.textField}`}
                                    variant="outlined"
                                    placeholder="Venue"
                                    size="small"
                                    value={venue}
                                    fullWidth
                                    onChange={(e) => setVenue(e.target.value)}
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
                <Button type="submit" size="small" onClick={handleForm} style={styleTheme}>
                    Done
                </Button>
            </Modal.Footer>
        </Modal>
    )
}