import React, { useEffect, useState } from 'react';
import * as friendsService from '../services/friends-service';
import FriendsForm from './FriendsForm';

const FriendsPage = () => {
  const [friends, setFriends] = useState([]) //why is this a variable? and why does the useState have an array inside it?
  useEffect(() => {
    const fetchFriends = async () => {
      setFriends(await friendsService.fetchFriends());
    };
    fetchFriends();
  }, []);
  return (
    <div>
      <ul>
        <FriendsForm />

        {friends.map((friend) => {
          return <li key={friend.io}>{friend.name}</li> // how is any of this working outside a direct tag or div?
        })}
      </ul>
    </div>
  );
};

export default FriendsPage;