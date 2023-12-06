import React, { useContext } from 'react';
import { Channel, Window, ChannelHeader, MessageList, MessageInput } from 'stream-chat-react';
import { AuthContext } from "../../context/authContext/authContext";
import { StreamChat } from 'stream-chat'

const Chat = () => {
    const authContext = useContext(AuthContext);

    const user = {
        id: authContext.user._id,
        name: authContext.user.name,
    };

    const apiKey = 'jsk5jx6wvmaj';
    const client = StreamChat.getInstance(apiKey);
    const token = localStorage.getItem("_token");
    console.log(token);
    client.connectUser(user, token);

    const channelId = `user-${user.id}`;

    const channel = client.channel('messaging', channelId, {
        members: [user.id],
    });

    return (
        <Channel channel={channel}>
            <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput />
            </Window>
        </Channel>
    );
};

export default Chat;
