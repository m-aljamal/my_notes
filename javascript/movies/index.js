

const featchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "6007b86b",
      s: "avengers",
    },
  });
  console.log(response.data);
};

featchData()