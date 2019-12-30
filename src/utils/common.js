export const calcAverage = function() {
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      sum += arguments[i];
    }
  }
  return sum / arguments.length;
}

export const getDataFromLocalStorage = key => JSON.parse(localStorage.getItem(key));

export const saveDataToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));