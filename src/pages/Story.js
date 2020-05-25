import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StoryList from '../components/StoryList';
import { getStories, getStoryIds } from '../api/hn.api';
import Spinner from '../components/Spinner';
import ScrollEvent from '../components/ScrollEvent';

const StoryWrap = styled.div`
  max-width: 960px;
  margin: 40px auto;
  @media (max-width: 768px) {
    width: 94%;
  }
`;

const Story = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getStoryIds();
        const data = await res.map((id) => getStories(id));
        const resolve = await Promise.all(data);
        await setStories(resolve);
      } catch (error) {
        console.log('error fetched');
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const addStories = (story) => {
    setStories((prev) => prev.concat(story));
  };

  return (
    <StoryWrap>
      <h1>#Hacker News Api</h1>
      <p>{stories.length}件</p>
      {isLoading ? (
        <Spinner isLoading={isLoading} />
      ) : (
        <React.Fragment>
          <StoryList stories={stories} />
        </React.Fragment>
      )}
      {stories.length > 0 ? <ScrollEvent addStories={addStories} /> : null}
    </StoryWrap>
  );
};

export default Story;
