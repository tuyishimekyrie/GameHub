import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
  params: {
    key: "306e63becae9485593838d4e1970819b",
  },
});