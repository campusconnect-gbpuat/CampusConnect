import { Fab, Grid, Button, Paper, Avatar } from "@material-ui/core"
import React, { useContext, useState } from "react"
import { AuthContext } from "../../../context/authContext/authContext"
import BrokenImageIcon from "@material-ui/icons/BrokenImage"
import PollIcon from "@material-ui/icons/Poll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faFeather, faGraduationCap, faStickyNote, faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
import { PostModal } from "../Modals/PostModal"
import { PostContext } from "../../../context/postContext/postContext"
import { BlogModal } from "../Modals/BlogModal"
import { BlogContext } from "../../../context/blogContext/BlogContext"
import { PollModal } from "../Modals/PollModal"
import { NoticeModal } from "../Modals/NoticeModal"
import { EventModal } from "../Modals/EventModal"
import { API } from "../../../utils/proxy"
import { PollContext } from "../../../context/pollContext/PollContext"
import { AdsContext } from "../../../context/adsContext/AdsContext"
import { NoticeContext } from "../../../context/noticeContext/NoticeContext"
import { EventContext } from "../../../context/eventContext/EventContext"
import { JobContext } from "../../../context/jobContext/JobContext"
import { JobModal } from "../Modals/JobModal"
import { AdsModal } from "../Modals/AdsModal"

export const InputBox = () => {
  const authContext = useContext(AuthContext)
  const postContext = useContext(PostContext)
  const blogContext = useContext(BlogContext)
  const pollContext = useContext(PollContext)
  const adsContext = useContext(AdsContext)
  const noticeContext = useContext(NoticeContext)
  const eventContext = useContext(EventContext)
  const jobContext = useContext(JobContext)
  const [showPost, setShowPost] = useState(false)
  const [showBlog, setShowBlog] = useState(false)
  const [showPoll, setShowPoll] = useState(false)
  const [showAds, setShowAds] = useState(false)
  const [showNotices, setShowNotices] = useState(false)
  const [showEvents, setShowEvents] = useState(false)
  const [showJobs, setShowJobs] = useState(false)

  const handleModalPoll = () => {
    setShowPoll(!showPoll)
  }
  const handleNotices = () => {
    setShowNotices(!showNotices)
  }
  const handleEvents = () => {
    setShowEvents(!showEvents)
  }
  const handleModalJob = () => {
    setShowJobs(!showJobs)
  }
  const handleModalPost = () => {
    // console.log(showPost)
    setShowPost(!showPost)
  }
  const handleModalBlog = () => {
    // console.log(showBlog)
    setShowBlog(!showBlog)
  }
  const handleModalAds = () => {
    // console.log(showBlog)
    setShowAds(!showAds)
  }

  const styleTheme =
    authContext.theme === "dark"
      ? { background: "#121212", color: "whitesmoke" }
      : null

  return (
    <div className="input-card">
      {showPost && (
        <PostModal
          show={showPost}
          handleModal={handleModalPost}
          postFunction={postContext.createPost}
          modalTitle="Create post"
          post={undefined}
        />
      )}
      {showBlog && (
        <BlogModal
          show={showBlog}
          handleModal={handleModalBlog}
          blogFunction={blogContext.createBlog}
          modalTitle="Write Blog"
          blog={undefined}
        />
      )}
      {showAds && (
        <AdsModal
          modalTitle="Create ads"
          show={showAds}
          adsFunction={adsContext.createAds}
          ads={undefined}
          handleModal={handleModalAds}
        />
      )}
      {showPoll && (
        <PollModal
          modalTitle="Create poll"
          show={showPoll}
          pollFunction={pollContext.createPoll}
          poll={undefined}
          handleModal={handleModalPoll}
        />
      )}
      {showNotices && (
        <NoticeModal
          modalTitle="Create Notice"
          show={showNotices}
          noticeFunction={noticeContext.createNotice}
          notice={undefined}
          handleModal={handleNotices}
        />
      )}
      {showEvents && (
        <EventModal
          modalTitle="Create Event"
          show={showEvents}
          eventFunction={eventContext.createEvent}
          event={undefined}
          handleModal={handleEvents}
        />
      )}
      {showJobs && (
        <JobModal
          modalTitle="Create Job"
          show={showJobs}
          jobFunction={jobContext.createJob}
          job={undefined}
          handleModal={handleModalJob}
        />
      )}
      <Paper elevation={3} variant="elevation" className="p-3 mb-3" style={styleTheme}>
        <Grid
          container
          justifyContent="center"
          direction="row"
          spacing={6}
          alignItems="center"
        >
          <Grid item xs={1}>
            <Avatar
              alt={authContext.user.name}
              src={`${API}/pic/user/${authContext.user._id}`}
            />
          </Grid>
          <Grid item xs={10}>
            <Fab
              variant="extended"
              disabled
              style={{ width: "100%", ...styleTheme }}
              size="medium"
            >
              {`What's on your mind? ${authContext.user.name}`}
            </Fab>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          className="pt-2"
        >
          <Grid item>
            <Button
              onClick={handleModalPost}
              startIcon={<FontAwesomeIcon icon={faEdit} />}
              style={styleTheme}
            >
              Create Post
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={handleModalBlog}
              startIcon={<FontAwesomeIcon icon={faFeather} />}
              style={styleTheme}
            >
              Write Blog
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleModalAds} startIcon={<BrokenImageIcon />} style={styleTheme}>
              Post Ad
            </Button>
          </Grid>
          {authContext.user.role === 2 && (
            <Grid item>
              <Button onClick={handleModalJob} startIcon={<FontAwesomeIcon icon={faGraduationCap} />} style={styleTheme}>
                Add Job
              </Button>
            </Grid>
          )}
          <Grid item>
            <Button onClick={handleModalPoll} startIcon={<PollIcon />} style={styleTheme}>
              Create Poll
            </Button>
          </Grid>
          {authContext.user.role === 2 && (
            <Grid item>
              <Button onClick={handleNotices} startIcon={<FontAwesomeIcon icon={faStickyNote} />} style={styleTheme}>
                Add Notice
              </Button>
            </Grid>
          )}
          {authContext.user.role === 2 && (
            <Grid item>
              <Button onClick={handleEvents} startIcon={<FontAwesomeIcon icon={faCalendarAlt} />} style={styleTheme}>
                Add Event
              </Button>
            </Grid>
          )}
        </Grid>
      </Paper>
    </div>
  )
}
