export const store = {
  email: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setEmail":
      return {
        ...state,
        email: action.data.email,
      };
    default:
      state;
  }
};

export const setEmail = (email) => {
  return {
    type: "setEmail",
    data: {
      email,
    },
  };
};
