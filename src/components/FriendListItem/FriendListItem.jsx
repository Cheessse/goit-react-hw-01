import clsx from 'clsx';

import css from '../FriendListItem/FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={ css.friendItem }>
            <img src={avatar} alt="Avatar" width="48" className={ css.friendImg } />
            <p className={ css.friendName }>{ name }</p>
            <p className={clsx([ css.isOffline ], {
                [ css.isOnline ] : isOnline,
            })}> {isOnline ? 'Online' : 'Offline'} </p>
</div>

    )
}

export default FriendListItem