import React from 'react';
import styled from 'styled-components';
import StoryItem from './StoryItem';

const StoryListWrap = styled.ul`
  background: #292929;
  width: 100%;
  margin-top: 60px;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const StoryList = ({ stories }) => {
  return (
    <StoryListWrap>
      {stories.map(({ id, ...otherStoryprops }) => (
        <StoryItem key={id} {...otherStoryprops} />
      ))}
    </StoryListWrap>
  );
};

export default StoryList;
