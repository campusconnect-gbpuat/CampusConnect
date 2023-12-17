import { createContext, useState, useEffect } from "react";

export const ChatContext = createContext();
export const ChatContextProvider = ({ children }) => {
  const [chatId, setChatId] = useState("");
  useEffect(() => {
    const chatId = localStorage.getItem("chatId");
    setChatId(chatId);
  }, []);
  console.log(chatId, "ChatContextProvider");
  return (
    <ChatContext.Provider value={{ chatId, setChatId }}>
      {children}
    </ChatContext.Provider>
  );
};
