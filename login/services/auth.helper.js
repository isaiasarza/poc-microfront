const _USERS = [
  {
    user: {
      selfie: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      name: "María Esteban Quito",
      email: "mestebanquito@gmail.com",
    },

    account: {
      status: "Activa",
      expiration: "",
      services: [],
    },
  },
];

export const authUser = ({ email, password }) => {
  const user = _USERS.find(({ user }) => user.email === email);

  if (!user) {
    return Promise.reject("Credenciales inválidas");
  }

  return Promise.resolve(user);
};
