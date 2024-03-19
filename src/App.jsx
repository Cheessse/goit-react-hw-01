import dataProfile from './data/Profile.json'

import Profile from './components/Profile/Profile'
import FriendsList from './components/FriendsList/FriendsList'
import Transactions from './components/Transactions/Transactions'


const App = () => {

  return (
    <>
      <Profile
        name={dataProfile.username}
        tag={dataProfile.tag}
        location={dataProfile.location}
        avatar={dataProfile.avatar}
        stats={dataProfile.stats}
      />
      <FriendsList />
      <Transactions />
    </>
  )
}

export default App