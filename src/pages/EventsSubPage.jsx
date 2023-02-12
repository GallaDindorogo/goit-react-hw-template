import { useFetchEvents } from 'Hooks/useFetchEvents';

const EventsSubPage = () => {
  const event = useFetchEvents();
  return <div>event</div>;
};

export default EventsSubPage;
