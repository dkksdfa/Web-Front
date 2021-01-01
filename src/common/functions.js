export const sortByLink = (a, b) => {
  if (a.link > b.link) return 1;
  if (a.link < b.link) return -1;
  return 0;
};

export const sortFunction = (previousValue, addedValue) => {
  return JSON.parse(JSON.stringify(previousValue))
    .concat(addedValue)
    .sort(sortByLink);
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
