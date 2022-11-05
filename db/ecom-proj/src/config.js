const apiUrl =
  process.env.REACT_APP_ENDPORT === "development"
    ? "http://localhost:3030"
    :"https://mighty-taiga-97720.herokuapp.com";
    

export default apiUrl;
