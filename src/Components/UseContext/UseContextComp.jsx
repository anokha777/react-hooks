
import { useState } from 'react';

import { DashboardContext } from './context';
import Dashboard from './Dashboard';

export default function UseContextComp() {
  const [user] = useState({
    isSubscribed: true,
    name: 'Anokha',
  });

  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}