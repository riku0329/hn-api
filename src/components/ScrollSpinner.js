import React from 'react';
import styled from 'styled-components';

const ScrollSpinnerWrap = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  transition: opacity 0.3s ease-in;
  ${(p) => (p.loading ? 'opacity: 1' : 'opacity: 0')};

  .circle {
    background-color: #fff;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 5px;
    animation: bounce 0.5s ease-in infinite;
  }

  .circle:nth-of-type(2) {
    animation-delay: 0.1s;
  }

  .circle:nth-of-type(3) {
    animation-delay: 0.2s;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }
  }
`;

const ScrollSpinner = ({ isLoading }) => {
  return (
    <ScrollSpinnerWrap loading={isLoading.toString()}>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
    </ScrollSpinnerWrap>
  );
};

export default ScrollSpinner;
