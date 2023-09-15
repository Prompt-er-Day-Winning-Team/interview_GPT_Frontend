export const convertRegistUserUrl = () => {
  return "https://i-dot-gpt-81f182021aa0.herokuapp.com/v1/users";
};

export const convertLoginUrl = () => {
  return "https://i-dot-gpt-81f182021aa0.herokuapp.com/v1/login";
};

export const convertCreateInterviewUrl = (user_id) => {
  return `https://i-dot-gpt-81f182021aa0.herokuapp.com/v1/users/${user_id}/prepare/interviews`;
};

export const convertCreatePersonaUrl = (user_id, interview_id) => {
  return `https://i-dot-gpt-81f182021aa0.herokuapp.com/v1/users/${user_id}/prepare/interviews/${interview_id}/persona`;
};

export const convertCreateQuestionListUrl = (user_id, interview_id) => {
  return `https://i-dot-gpt-81f182021aa0.herokuapp.com/v1/users/${user_id}/prepare/interviews/${interview_id}/question-list`;
};

export const convertCreateVirtualInterviewUrl = (user_id, interview_id) => {
  return `https://i-dot-gpt-81f182021aa0.herokuapp.com/v1/users/${user_id}/prepare/interviews/${interview_id}/virtual-interview`;
};

export const convertGetInterviewResultUrl = (user_id, interview_id) => {
  //return `https://i-dot-gpt-81f182021aa0.herokuapp.com/v1/users/${user_id}/progress/interviews/${interview_id}/interview_results`;
  return `https://i-dot-gpt-81f182021aa0.herokuapp.com/v1/users/${1}/progress/interviews/${12}/interview_results`;
};
