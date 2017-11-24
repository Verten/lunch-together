const host = "http://api.github.com/";

const users = "users";

const emojis = "emojis";

export const getUsersUrl = () => {
  return `${host}${users}`;
};

export const getEmojisUrl = () => {
  return `${host}${emojis}`;
};
