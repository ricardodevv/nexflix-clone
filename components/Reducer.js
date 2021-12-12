export const store = { email: [], user: [null] };

export const reducer = (state, action) => {
  switch (action.type) {
    case "setEmail":
      return {
        ...state,
        email: action.data.email,
      };
    case "setUser":
      return {
        ...state,
        user: action.data.user,
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

export const setUser = (user) => {
  return {
    type: "setUser",
    data: {
      user,
    },
  };
};
