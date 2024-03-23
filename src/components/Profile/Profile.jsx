import css from './Profile.module.css'

const Profile = ({ username, tag, location, avatar, stats }) => { 
    return (
        <>
            <div className={css.profile}>
                <div className={css.prof}>
                    <img
                        src={avatar}
                        alt="User avatar"
                        className={css.image}
                    />
                    <p className={css.name}>{username}</p>
                    <p className={css.tag}>@{tag}</p>
                    <p className={css.location}>{location}</p>
                </div>

                <ul className={css.stats}>
                    <li className={css.profileListItem}>
                        <span className={css.profileSpan}>Followers</span>
                        <span className={css.profileInfoSpan}>{stats.followers}</span>
                    </li>
                    <li className={css.profileListItem}>
                        <span className={css.profileSpan}>Views</span>
                        <span className={css.profileInfoSpan}>{stats.views}</span>
                    </li>
                    <li className={css.profileListItem}>
                        <span className={css.profileSpan}>Likes</span>
                        <span className={css.profileInfoSpan}>{stats.likes}</span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Profile