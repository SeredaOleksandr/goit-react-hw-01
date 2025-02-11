import "./App.css";
import Profile from "./Profile/Profile";
import userData from "../data/userData.json";
import friends from "../data/friends.json";
import FriendList from "./FriendList/FriendList";
import transactions from "../data/transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
