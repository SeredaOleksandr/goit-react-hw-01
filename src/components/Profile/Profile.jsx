import s from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  const stats = [
    { label: "Followers", value: followers },
    { label: "Views", value: views },
    { label: "Likes", value: likes },
  ];
  return (
    <div className={s.profCard}>
      <div className={s.profData}>
        <img className={s.avatar} src={image} alt={name} />
        <p className={s.profName}>{name}</p>
        <p className={s.profTag}>@{tag}</p>
        <p className={s.profLocation}>{location}</p>
      </div>

      <ul className={s.profStats}>
        {stats.map(({ label, value }) => {
          return (
            <li key={label} className={s.profStatsItem}>
              <span>{label}</span>
              <span className={s.profValue}>{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Profile;
