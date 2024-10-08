import React, {useState} from 'react';
import { StreamChat } from 'stream-chat'
import { ChannelList, Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie';

import 'stream-chat-react/dist/css/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

import { ChannelContainer, ChannelListContainer, Auth } from './components';


const cookies = new Cookies();

const apiKey = import.meta.env.VITE_STREAM_API_KEY;
const authToken = cookies.get('token');


const client = StreamChat.getInstance(apiKey);

if (authToken) {
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber'),
  }, authToken);
}


const App = () => {
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);


  if (!authToken) return <Auth />
  return (
    <div className='app__wrapper'>
        <Chat client={client} theme='team light'>
        <ChannelListContainer 
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            setIsEditing={setIsEditing}
        />
        <ChannelContainer 
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            createType={createType}
        />
        </Chat>
        
    </div>
  )
}

export default App;
