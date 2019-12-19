export const movies = (state = {}, { type, data }) => {
  switch (type) {
    case "STORE_MOVIES":
      return data;
    default:
      return state;
  }
};
