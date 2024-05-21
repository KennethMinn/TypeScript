type User = {
  name: string;
  readonly email?: string; //optional and cannot change the value - user.email = "newEmail" -> error
  isPaid: boolean;
};

const createUser = (user: User): User => {
  return user;
};

const newUser = { name: "mtk", isPaid: false }; // optional to add email field
createUser(newUser);

export {};
