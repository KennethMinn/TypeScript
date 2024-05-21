let hero: string;

const getHero = (): string => {
  return "Batman";
};

hero = getHero();

const arr = [1, "mtk"];

arr.map((item): string | number => item);

//never - never return a value
const handleError = (errMsg: string): never => {
  throw new Error(errMsg);
};
