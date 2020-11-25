
const addMulti = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
      return curResult + curValue;
    }, 0);
  };
  
  const addedNumbers = addMulti(5, 10, 2, 3.7);
  console.log(addedNumbers);