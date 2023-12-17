import React, { useContext, useState } from "react";
import "./Header.css";
import {
  AppBar,
  Button,
  Fade,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { AuthContext } from "../../../context/authContext/authContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faHome,
  faBookReader,
  faHandsHelping,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FeedbackModal } from "../../pages/Modals/FeedbackModal";

const currentTab = (location, path) => {
  if (location.pathname === path) {
    return { color: "#03DAC6", fontSize: "28px" };
  } else {
    return { color: "grey", fontSize: "24px" };
  }
};
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const authContext = useContext(AuthContext);
  const [showFeedback, setShowFeedback] = useState(false);
  const [moreOption, setMoreOption] = useState(null);
  const handleMoreOption = (e) => {
    setMoreOption(e.currentTarget);
  };
  const open = Boolean(moreOption);
  const handleClose = () => {
    setMoreOption(null);
  };

  const handleFeedback = () => {
    setShowFeedback(!showFeedback);
  };
  const styleTheme =
    authContext.theme === "dark"
      ? { background: "#212121", color: "white" }
      : { background: "white", color: "black" };

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

  const classes = useStyles();

  // console.log(authContext)
  return (
    <div className="header">
      {showFeedback ? (
        <FeedbackModal show={showFeedback} onhide={handleFeedback} />
      ) : null}
      <AppBar style={styleTheme} elevation={3}>
        <Toolbar className="header">
          <div className="header-part-1">
            <Button
              style={{ textTransform: "none" }}
              onClick={() => {
                navigate("/");
              }}
            >
              {authContext.theme === "dark" ? (
                <img
                  src="/cc_logo_horizontal_white.png"
                  alt="logo"
                  className="logo"
                  height="40px"
                />
              ) : (
                <img
                  src="/cc_logo_horizontal.png"
                  alt="logo"
                  className="logo"
                  height="40px"
                />
              )}
              {/* {authContext.theme === "dark"
                ? <img src="/cc_logo_mobile_white.png" alt="logo" className="mobile-logo" height="40px" />
                : <img src="/cc_logo_mobile.png" alt="logo" className="mobile-logo" height="40px" />} */}
              {/* <Typography variant="h6" id="header-name" style={{ color: styleTheme.color }}>
                CampusConnect
              </Typography> */}
            </Button>
          </div>
          <div className="header-part-2">
            <Grid container justifyContent="space-around" direction="row">
              <Grid item>
                <Link to="/">
                  <IconButton>
                    <FontAwesomeIcon
                      icon={faHome}
                      style={currentTab(location, "/")}
                    />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/blogs">
                  <IconButton>
                    <FontAwesomeIcon
                      icon={faBookReader}
                      style={currentTab(location, "/blogs")}
                    />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/ads">
                  <IconButton>
                    <FontAwesomeIcon
                      icon={faHandsHelping}
                      style={currentTab(location, "/ads")}
                    />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/jobs-and-placements">
                  <IconButton>
                    <FontAwesomeIcon
                      icon={faUserGraduate}
                      style={currentTab(location, "/jobs-and-placements")}
                    />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/chats">
                  <IconButton>
                    <FontAwesomeIcon
                      icon={faComment}
                      style={currentTab(location, "/chat")}
                    />
                  </IconButton>
                </Link>
              </Grid>
            </Grid>
          </div>

          <div className="header-part-3">
            {/* <TextField
              id="outlined-password-input"
              label="Search"
              type="text"
              size="small"
              variant="outlined"
              className={classes.textField}
            /> */}
            <IconButton onClick={handleMoreOption}>
              <MoreVertIcon style={{ color: styleTheme.color }} />
            </IconButton>
            <Menu
              id="fade-menu"
              anchorEl={moreOption}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
              PaperProps={{ style: { backgroundColor: styleTheme.background } }}
            >
              <MenuItem
                // onClick={handleClose}
                onClick={() => {
                  navigate(`/profile/${authContext.user._id}`);
                }}
                style={styleTheme}
              >
                View Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/about-university");
                }}
                style={styleTheme}
              >
                About University
              </MenuItem>
              {/* <MenuItem
                onClick={() => {
                  navigate("/help-support")
                }}
              >
                Help & Support
              </MenuItem> */}
              <MenuItem
                onClick={() => {
                  navigate("/settings-privacy");
                }}
                style={styleTheme}
              >
                Settings & Privacy
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleFeedback();
                  handleClose();
                }}
                style={styleTheme}
              >
                Give Feedback
              </MenuItem>
              <MenuItem
                onClick={() => {
                  authContext.signoutUser();
                }}
                style={styleTheme}
              >
                Signout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
