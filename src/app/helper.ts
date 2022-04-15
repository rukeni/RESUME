export const getRandomInt = (min:number, max:number) => {
  if(Math.min(min, max) === max) {
    [min, max] = [max, min]
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
