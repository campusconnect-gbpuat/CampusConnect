import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"

import React, { useContext, useState } from "react"
import Moment from "react-moment"
import { useNavigate } from "react-router-dom"
import { AdsContext } from "../../../../context/adsContext/AdsContext"
import { AuthContext } from "../../../../context/authContext/authContext"
// import { UserContext } from "../../../../context/userContext/UserContext"
import { API, CDN_URL } from "../../../../utils/proxy"
import { AdsModal } from "../../Modals/AdsModal"

export const AdsCard = ({ ads }) => {
  const navigate = useNavigate()
  const authContext = useContext(AuthContext)
  // const userContext = useContext(UserContext)
  const adsContext = useContext(AdsContext)
  const [moreOption, setMoreOption] = useState(null)
  const handleMoreOption = (e) => {
    setMoreOption(e.currentTarget)
  }
  const open = Boolean(moreOption)
  const handleClose = () => {
    setMoreOption(null)
  }
  const [showAds, setShowAds] = useState(false)

  const handleModalAds = () => {
    handleClose()
    setShowAds(!showAds)
  }

  const styleTheme =
    authContext.theme === "dark"
      ? { background: "#121212", color: "whitesmoke" }
      : { background: "white", color: "black" }

  return (
    <Card variant="elevation" elevation={3} className="mb-3" style={styleTheme}>
      {showAds && (
        <AdsModal
          show={showAds}
          handleModal={handleModalAds}
          adsFunction={adsContext.updateAd}
          modalTitle="Update Ad"
          ads={ads}
        />
      )}
      <CardHeader
        avatar={
          <Avatar alt={ads.user.name} src={`${API}/pic/user/${ads.user._id}`} />
        }
        action={
          <>
            <IconButton aria-label="settings" onClick={handleMoreOption} style={styleTheme}>
              <MoreHorizIcon />
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
              {authContext.user._id === ads.user._id ? (
                <MenuItem onClick={handleModalAds} style={styleTheme}>Edit</MenuItem>
              ) : null}
              {authContext.user._id === ads.user._id ? (
                <MenuItem
                  onClick={() => {
                    adsContext.deleteAd(authContext.user._id, ads._id)
                    handleClose()
                  }}
                  style={styleTheme}
                >
                  Delete
                </MenuItem>
              ) : null}
              <MenuItem onClick={handleClose} style={styleTheme}>Share</MenuItem>
              <MenuItem onClick={handleClose} style={styleTheme}>Bookmark</MenuItem>

              <MenuItem onClick={handleClose} style={styleTheme}>Report Post</MenuItem>
            </Menu>
          </>
        }
        title={
          <b
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate(`/profile/${ads.user._id}`)
            }}
          >
            {ads.user.name}
          </b>
        }
        subheader={<Moment style={styleTheme} fromNow>{ads.createdAt}</Moment>}
      />
      <CardContent className="py-1">
        <Typography variant="body1" component="p">
          {ads.title}
        </Typography>
        <Typography variant="body2" component="p">
          {ads.content}
        </Typography>
        <Typography variant="subtitle1" component="p">
          Price: Rs. {ads.price}
        </Typography>
        <Typography variant="subtitle1" component="p">
          {ads.contact}
        </Typography>
        <div className="centered-image-container">
          {ads.picture.length > 0 && (
            <img className="centered-image" height="100%" src={`${CDN_URL}/${ads.picture[0]}`} alt={ads.picture[0]} />
          )}
        </div>
      </CardContent>
    </Card>
  )
}
