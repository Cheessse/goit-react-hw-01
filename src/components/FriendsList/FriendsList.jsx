import FriendListItem from "../FriendListItem/FriendListItem"
import css from '../FriendsList/FriendsList.module.css'

const FriendsList = ({ friends }) => { 
    return (
<ul className={css.friendsList}>
            {friends.map(friend => {
                return (
    <li key={friend.id}>
        <FriendListItem
         avatar={friend.avatar}
         name={friend.name}
         isOnline={friend.isOnline}
        />
	</li>
        )
    })}
</ul>

    )
}

export default FriendsList