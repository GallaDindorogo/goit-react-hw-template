import { Item } from './navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>{<Item to="/">HOME</Item>}</li>
        <li>{<Item to="events">EVENTS</Item>}</li>
      </ul>
    </nav>
  );
};

export default Navigation;
