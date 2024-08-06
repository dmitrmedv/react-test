import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <>
      <Section
        color
        children={
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        }
      />
      <Section
        children={
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        }
      />
      <Section
        color
        children={
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        }
      />
    </>
  );
};
