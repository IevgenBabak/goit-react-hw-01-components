import PropTypes from "prop-types";
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => (
    <div className={profile}>
        <div className={description}>
            <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                alt="User avatar"
                className="avatar"
            />
            <p className={name} > {username}</p>
            <p className={ag} > @{tag}</p>
            <p className={location} > {location}</p>
        </div>

        <ul className={stats}>
            <li>
                <span className={label} >Followers</span>
                <span className={quantity} > {stats.followers}</span>
            </li>
            <li>
                <span className={label} >Views</span>
                <span clasName={quantity} > {stats.views}</span>
            </li>
            <li>
                <span className={label} >Likes</span>
                <span className={quantity} > {stats.likes}</span>
            </li>
        </ul>
    </div>
);



Profile.PropTypes - {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};
