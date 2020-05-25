import { useState, useEffect } from 'react';

const MAX_STORIES = 150;
const STORY_IMCREMENT = 5;


const debounce = (func, wait, immediate, args) => {
  let timeout;
  return () => {
    const context = this;
    const callNow = immediate && !timeout;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args)
    }

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args)
  }
}


export const useInfiniteScroll = () => {
  const [eventcroll, setEventScroll] = useState(false);
  const [prevCount, setPrevCount] = useState(0)
  const [count, setCountState] = useState(STORY_IMCREMENT);

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      eventcroll
    ) {
      return false;
    }
    setEventScroll(true);
  }, 50);

  useEffect(() => {
    if (!eventcroll) return;

    if (count + STORY_IMCREMENT >= MAX_STORIES) {
      setPrevCount(MAX_STORIES - 10)
      setCountState(MAX_STORIES);
    } else {
      setPrevCount(count)
      setCountState(count + STORY_IMCREMENT);
    }
    setEventScroll(false);
  }, [eventcroll]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return { count, prevCount, eventcroll };
};
