import { fetchEvents } from 'services/moviesAPI';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  const element = events.map(event => (
    <li key={event.id}>
      <Link to={event.id}>{event.name}</Link>
    </li>
  ));

  return (
    <>
      <ul>{element}</ul>
      <Outlet />
    </>
  );
};

export default EventsPage;
