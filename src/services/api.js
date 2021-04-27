import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
  headers: {
    "Content-Type": "application/json"
  },
});

const endpoints = {
  getCategories: () => "/categories.php",
  getRandom: () => "/random.php",
};

const api = {
  getCategories: async () => {
    const { data } = await instance.get(endpoints.getCategories());
    return data;
  },
  getRandom: async () => {
    const { data } = await instance.get(endpoints.getRandom());
    return data;
  },
  getMultiples: async () => {
    let responses = [];
    await axios.all([
      instance.get(endpoints.getRandom()),
      instance.get(endpoints.getRandom()),
      instance.get(endpoints.getRandom()),
    ]).then((response) => {
      response.map(({ data: { meals } }) => {
        responses.push(meals[0]);
        return meals;
      });
    });
    return responses;
  }
};

export default api;
