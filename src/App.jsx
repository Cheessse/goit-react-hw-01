import dataProfile from './data/Profile.json'
import friends from './data/Friends.json'
import transactions from './data/Transactions.json'

import Profile from './components/Profile/Profile'
import FriendsList from './components/FriendsList/FriendsList'
import Transactions from './components/Transactions/Transactions'

import './App.css'

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
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
    </>
  )
}

export default App