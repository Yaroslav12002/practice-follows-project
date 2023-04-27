import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useLocation } from 'react-router-dom';

import GoBack from '../../components/GoBack';
import UsersList from '../../components/UsersList';
import LoadMoreButton from '../../components/LoadMoreButton';
import Filter from '../../components/Filter';
import { getUsers, setUser } from '../../services/tweetsAPI';
import { TweetsWrapper } from './Tweets.styled';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [filter, setFilter] = useState('all');
  const [isFiltering, setIsFiltering] = useState(false);
  const [previousFetchedPage, setPreviousFetchedPage] = useState(0);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const handlePageIncrease = () => {
    setPage(page + 1);
  };

  const userFollowersChange = (id, payload) => {
    let changedUser = null;
    const newUsers = users.map(user => {
      if (user.id === id) {
        changedUser = { ...user, followers: user.followers + payload };
        return { ...changedUser };
      } else {
        return user;
      }
    });
    if (changedUser) {
      setUser(changedUser);
    }
    setUsers(newUsers);
  };

  const userFollowersIncrease = id => {
    userFollowersChange(id, 1);
  };

  const userFollowersDecrease = id => {
    userFollowersChange(id, -1);
  };

  const filterChanged = e => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    if (newFilter === 'all') {
      setIsFiltering(false);
    } else {
      setIsFiltering(true);
    }
  };

  useEffect(() => {
    const loadUsers = async () => {
      if (previousFetchedPage !== page) {
        setIsLoading(true);
        setPreviousFetchedPage(page);
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
      }
    };

    loadUsers();
  }, [page, filter, previousFetchedPage]);

  return (
    <TweetsWrapper>
      <GoBack to={backLinkHref}>Go back</GoBack>
      <Filter handleChange={filterChanged} />
      <UsersList
        users={users}
        filter={filter}
        userFollowersIncrease={userFollowersIncrease}
        userFollowersDecrease={userFollowersDecrease}
      />
      {!isLastPage && (
        <LoadMoreButton
          loadMore={handlePageIncrease}
          isLoading={isLoading}
          isFiltering={isFiltering}
        />
      )}
    </TweetsWrapper>
  );
};

export default Tweets;
