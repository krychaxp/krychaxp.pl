import axios from 'axios';

const send = async (url, method = 'get', data = {}, headers = {}) => {
  const result = await axios({ method, url, data, headers });
  return result.data;
};

export const getUrl = (url, options, method) => send(url, options, method);

export const getFreeUrl = (options) => send(`/api/url/${options}`);

export const getUserIp = () => send('/api/myip');

export const getUserIpJson = (options = '') => send(`/api/ip/${options}`);

export const sendEmail = (options) => send('/api/email', 'post', options);

export const getGithubUser = (nick) => send(`https://api.github.com/users/${nick}`);

export const getCoronaCountry = (country = 'poland') => send(`/api/coronavirus/country/${country}`);

export const getCoronaCountries = () => send('/api/coronavirus/countries');
