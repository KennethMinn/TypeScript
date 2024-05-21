const exampleIdentity = (val: string | number): string | number => {
  return val;
};

//type will be dynamically changing as the input type
const final_identity = <T>(arg: T): T => {
  return arg;
};

final_identity(2);

interface Bottle {
  brand: string;
}

const bottle = {
  brand: "Corona",
};

final_identity<Bottle>(bottle);

//-----------------------------------------------------------------------

//Generics

// type Data = {
//   name: string;
//   age: number;
// };

// type ApiResponse<Data> = {
//   data: Data;
//   status: number;
// };

// const response: ApiResponse<Data> = {
//   data: {
//     name: "mtk",
//     age: 18,
//   },
//   status: 200,
// };

//Non-Generics

// type Data = {
//   name: string;
//   age: number;
// };

// type ApiResponse = {
//   data: Data;
//   status: number;
// };

// const response: ApiResponse = {
//   data: {
//     name: "mtk",
//     age: 18,
//   },
//   status: 200,
// };

//Advantages of using generics - Flexibility, Reusability, Readability, Maintainability

type User = {
  name: string;
  age: number;
};

type Product = {
  id: number;
  price: number;
};

type ApiResponse<T> = {
  data: T;
  status: number;
};

const userResponse: ApiResponse<User> = {
  data: {
    name: "mtk",
    age: 18,
  },
  status: 200,
};

const productResponse: ApiResponse<Product> = {
  data: {
    id: 123,
    price: 19.99,
  },
  status: 200,
};
