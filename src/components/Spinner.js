import React from 'react';
import styled from 'styled-components';

const SpinnerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
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

const Spinner = ({ isLoading }) => {
  return (
    <SpinnerWrap loading={isLoading.toString()}>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
    </SpinnerWrap>
  );
};

export default Spinner;
