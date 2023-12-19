import { createContext, useState, useEffect } from "react";

export const ChatContext = createContext();
export const ChatContextProvider = ({ children }) => {
  const [chatId, setChatId] = useState("");
  const [talkingWithId, setTalkingWithId] = useState("");
  useEffect(() => {
    const chatId = localStorage.getItem("chatId");
    const talkingWithId = localStorage.getItem("talkingWithId");
    setChatId(chatId);
    setTalkingWithId(talkingWithId);
  }, []);
  console.log(chatId, "ChatContextProvider");
  return (
    <ChatContext.Provider
      value={{ chatId, setChatId, setTalkingWithId, talkingWithId }}
    >
      {children}
    </ChatContext.Provider>
  );
};
