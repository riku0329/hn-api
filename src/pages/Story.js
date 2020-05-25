import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StoryList from '../components/StoryList';
import { getStories, getStoryIds } from '../api/hn.api'

const StoryWrap = styled.div`
  max-width: 960px;
  margin: 0 auto;
  margin-top: 20px;
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
        setStories(resolve);
      } catch (error) {
        console.log('error fetched');
      }
      setLoading(false);
    };

    fetchData();
  }, []);


  return (
    <StoryWrap>
      <h1>#Hacker News Api</h1>
      <p>1 ~ {stories.length}件</p>
      {isLoading ? <p>Loading...</p> : <StoryList stories={stories} />}
    </StoryWrap>
  );
};

export default Story;
