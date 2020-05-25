export const getStoryIds = async () => {
  try {
    const api = 'https://hacker-news.firebaseio.com/v0/newstories.json';
    const storyIdResponse = await fetch(api);
    const storyIds = await storyIdResponse.json();
    return storyIds.filter((_, i) => i < 20);
  } catch (error) {
    console.log('error was fetch api');
  }
};

export const getStories = async (id) => {
  try {
    const api = await `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
    const storyResponse = await fetch(api);
    return storyResponse.json();
  } catch (error) {
    console.log('error map stories');
  }
};
