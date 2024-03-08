import { useUserContext } from './context';

export function Sidebar() {
  const user = useUserContext();

  return (
    <div>
      <div>{user.name}</div>
      <div>Subscription Status: {user.isSubscribed ? 'Active' : 'Inactive'}</div>
    </div>
  );
}

export function Profile() {
  const user = useUserContext();

  return <div>Profile name: {user.name}</div>;
}