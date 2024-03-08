import { useCallback, useState } from 'react';
import { Button } from 'antd';
// import { shuffle } from '@/utils';

import Search from './Search';

const allUsers = [
  'john',
  'alex',
  'george',
  'simon',
  'james',
];

export default function UseCallback() {
  const [users, setUsers] = useState(allUsers);
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const handleSearch = useCallback(
    (text) => {
      console.log(users[0]);

      const filteredUsers = allUsers.filter((user) =>
        user.includes(text),
      );
      setUsers(filteredUsers);
    },
    [users],
  );

  return (
    <div className='tutorial'>
      <div className='align-center mb-2 flex'>
        <Button onClick={() => setUsers(shuffleArray(allUsers))}>
          Shuffle
        </Button>

        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

