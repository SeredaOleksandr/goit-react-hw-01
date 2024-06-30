import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.wrapper}>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.friendName}>{name}</p>
      <p className={`${s.status} ${isOnline ? s.online : s.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
