//Mutiple Generics

type ApiResponse<Data, Metadata> = {
  data: Data;
  metadata: Metadata;
  status: number;
};

// Example data types
type User = {
  name: string;
  age: number;
};

type PaginationInfo = {
  page: number;
  pageSize: number;
  totalPages: number;
};

type ErrorInfo = {
  message: string;
  code: number;
};

// Using the ApiResponse with different types
const userResponse: ApiResponse<User, PaginationInfo> = {
  data: {
    name: "mtk",
    age: 18,
  },
  metadata: {
    page: 1,
    pageSize: 10,
    totalPages: 5,
  },
  status: 200,
};

const errorResponse: ApiResponse<null, ErrorInfo> = {
  data: null,
  metadata: {
    message: "User not found",
    code: 404,
  },
  status: 404,
};

export {};
