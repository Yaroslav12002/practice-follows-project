import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useLocation } from 'react-router-dom';

import GoBack from '../../components/GoBack';
import UsersList from '../../components/UsersList';
import LoadMoreButton from '../../components/LoadMoreButton';
import { getUsers } from '../../services/tweetsAPI';
import { TweetsWrapper } from './Tweets.styled';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      const responseData = await getUsers(page);
      if (page === 1) {
        setUsers([...responseData]);
      } else {
        setUsers(prev => [...prev, ...responseData]);
      }
      setIsLoading(false);
      if (responseData.length < 3) {
        setIsLastPage(true);
        Notify.success('No more users');
      }
    };

    loadUsers();
  }, [page]);

  const handlePageIncrease = () => {
    setPage(page + 1);
  };

  return (
    <TweetsWrapper>
      <GoBack to={backLinkHref}>Go back</GoBack>
      <UsersList users={users} />
      {!isLastPage && (
        <LoadMoreButton loadMore={handlePageIncrease} isLoading={isLoading} />
      )}
    </TweetsWrapper>
  );
};

export default Tweets;
