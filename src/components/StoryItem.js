import React from 'react';
import styled from 'styled-components';
import { mapTime } from '../utils/time';

const StoryItemWrap = styled.li`
  padding: 12px 20px;
  border-bottom: 2px solid #333;
  h2:hover {
    opacity: 0.8;
  }
  span{
    color: #BA2E43;
    margin-right: 10px;
  }
`;

const StoryItem = ({ title, url, by, time, i}) => {
  return (
    <React.Fragment>
      <StoryItemWrap>
        <a className='story_link-hover' href={url}>
          <h2><span>{i + 1}</span>{title}</h2>
        </a>
        <p>
          by: {by} {mapTime(time)}
        </p>
      </StoryItemWrap>
    </React.Fragment>
  );
};

export default StoryItem;
