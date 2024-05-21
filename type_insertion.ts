interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

type PersonEmployee = Person & Employee; // {  name: string; age: number; employeeId: number; department: string;}

const personEmployee: PersonEmployee = {
  name: "Alice",
  age: 30,
  employeeId: 1234,
  department: "Engineering",
};
