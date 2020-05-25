import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { getStories, scrollStoryIds } from '../api/hn.api';
import ScrollSpinner from './ScrollSpinner';

const ScrollEventWrap = styled.div`
  height: 5vh;
  width: 100%;
  margin: 0 auto;
`;

const ScrollEvent = ({ addStories }) => {
  const { count, prevCount } = useInfiniteScroll();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await scrollStoryIds(prevCount, count);
        const data = await res.map((id) => getStories(id));
        const resolve = await Promise.all(data);
        await addStories(resolve);
      } catch (error) {
        console.log('error fetched');
      }
      setLoading(false);
    };
    fetchData();
  }, [prevCount, count]);

  console.log(isLoading);

  return (
    <ScrollEventWrap>
      {isLoading ? <ScrollSpinner isLoading={isLoading} /> : null}
    </ScrollEventWrap>
  );
};

export default ScrollEvent;
