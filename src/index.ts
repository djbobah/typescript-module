import { getData } from "./task3";

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

getData(COMMENTS_URL).then((data) => {
  data.map((item) => console.log(`ID: ${item.id}, Email: ${item.email}`));
});
