import React from "react";
import "./App.css";
import { Routing } from "./components/common/Routing";
import { AdsState } from "./context/adsContext/AdsState";
import { AuthState } from "./context/authContext/AuthState";
import { BlogState } from "./context/blogContext/BlogState";
import { NoticeState } from "./context/noticeContext/NoticeState";
import { EventState } from "./context/eventContext/EventState";
import { UpdateState } from "./context/updateContext/UpdateState";
import { PollState } from "./context/pollContext/PollState";
import { PostState } from "./context/postContext/PostState";
import { UserState } from "./context/userContext/UserState";
import { JobState } from "./context/jobContext/JobState";
import { FirebaseContextProvider } from "./context/firebaseContext";

export const App = () => {
  return (
    <FirebaseContextProvider>
      <AuthState>
        <UserState>
          <PollState>
            <PostState>
              <BlogState>
                <AdsState>
                  <EventState>
                    <JobState>
                      <UpdateState>
                        <NoticeState>
                          <Routing />
                        </NoticeState>
                      </UpdateState>
                    </JobState>
                  </EventState>
                </AdsState>
              </BlogState>
            </PostState>
          </PollState>
        </UserState>
      </AuthState>
    </FirebaseContextProvider>
  );
};
