import dataProfile from '../data/Profile.json'
import Friends from '../data/Friends.json'

import Profile from './Profile/Profile'
import FriendsList from './FriendsList/FriendsList'
import Transactions from './Transactions/Transactions'


const App = () => {

  return (
    <>
      <Profile
        username={dataProfile.username}
        tag={dataProfile.tag}
        location={dataProfile.location}
        avatar={dataProfile.avatar}
        stats={dataProfile.stats}
      />
      <FriendsList friends={Friends} />
      <Transactions />
    </>
  )
}

export default App