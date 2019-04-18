export const defaults = {
  isLoggedIn: localStorage.getItem('token') !== null ? true : false
};

export const resolvers = {
  Mutations: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("token", token);
      cache.writeDate({
        data: {
          isLoggedIn: true
        }
      });
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("token");
      window.location.reload();
      return null;
    }
  }
};
