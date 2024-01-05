import axios from "axios";

export {};

let url: string = "https://volta.sh/";

axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[];
  data = response.data;
  //   data = [
  //     {
  //       id: 1,
  //       title: "title",
  //       description: "description",
  //     },
  //   ];
  console.log(data);
});
