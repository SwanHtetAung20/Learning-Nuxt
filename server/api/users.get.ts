import data from "../users.json";

export default defineEventHandler(async (event) => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
});
