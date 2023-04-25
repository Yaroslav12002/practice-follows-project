import { useEffect, useState } from 'react';

import UsersList from '../components/UsersList';
import { fetchTweets } from '../services/tweetsAPI';

const Tweets = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      const responseData = await fetchTweets();
      setUsers(responseData);
      setIsLoading(false);
    };

    loadUsers();
  }, []);

  return !isLoading ? <UsersList users={users} /> : <div>data loading...</div>;
};

export default Tweets;
