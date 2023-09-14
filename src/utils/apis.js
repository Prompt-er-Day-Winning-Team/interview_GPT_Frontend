export const convertRegistUserUrl = () => {
  return "https://i-dot-gpt-81f182021aa0.herokuapp.com/v1/users";
};

export const convertLoginUrl = () => {
  return "https://i-dot-gpt-81f182021aa0.herokuapp.com/v1/login";
};

export const convertCreateInterviewUrl = (user_id) => {
  return `https://i-dot-gpt-81f182021aa0.herokuapp.com/v1/users/${user_id}/prepare/interviews`;
};
