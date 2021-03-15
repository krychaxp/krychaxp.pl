import axios from "axios";
const send = (url, method = "get", options = {}, headers = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!window.navigator.onLine) {
        window.setAlert("error", "Brak dostępu do internetu!");
        reject("Brak dostępu do internetu!");
      }
      const { data } = await axios[method](url, options, { headers });
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};
export const API = {
  base: process.env.NEXT_PUBLIC_API_URL,
  git: "https://api.github.com",
  corona: "https://api.covid19api.com",
};

export const getUrl = (url, options, method) => send(url, options, method);

export const getFreeUrl = (url = "") => send(`${API.base}/api/url/${url}`);

export const getUserIp = () => send(`${API.base}/api/myip`);

export const getUserIpJson = (options = "") =>
  send(`${API.base}/api/ip/json/${options}`);

export const getUserIpTable = (options = "") =>
  send(`${API.base}/api/ip/table/${options}`);

export const sendEmail = (options) =>
  send(`${API.base}/krychaxp/email`, "post", options);

export const getGithubUser = (nick) => send(`${API.git}/users/${nick}`);

export const getCoronaCountry = (country = "poland") =>
  send(`${API.corona}/total/dayone/country/${country}`);

export const getCoronaCountries = () => send(`${API.corona}/countries`);

export const getCoronaGlobal = () => send(`${API.corona}/summary`);

export const getLanguages = () => send(`${API.base}/api/translate`);
