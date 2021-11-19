const detectClickOnPage = (handler, variable) => {
  if (variable === true) {
    handler(!variable);
  }
};

export default detectClickOnPage;
