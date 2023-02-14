import { fetchEventById } from '../services/moviesAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchEvents = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchEventById(id).then(setEvent);
  }, [id]);
  console.log(event);
  console.log(event);
  return event;
};
