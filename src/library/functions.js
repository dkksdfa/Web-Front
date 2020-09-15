export const sortByLink = (a, b) => {
  if (a.link > b.link) return 1;
  if (a.link < b.link) return -1;
  return 0;
};

export function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Client-ID 8d26ccd12712fca");
    const data = new FormData();
    data.append("image", file);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

export const getDateDifference = () => {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(2020, 8, 9);
  const secondDate = new Date();
  secondDate.setMinutes(0);
  secondDate.setHours(0);
  secondDate.setSeconds(0);
  const diffDays = Math.round(Math.abs((secondDate - firstDate) / oneDay));
  const mlsvId = 1409338 + diffDays;
  return mlsvId;
};
