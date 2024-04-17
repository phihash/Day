export const  calculateRokuyou = (year: number, month: number, day: number) => {
  const rokuyouArray = ['先勝', '友引', '先負', '仏滅', '大安', '赤口'];
  const dayIndex = new Date(year, month - 1, day).getDay();
  const rokuyouIndex = (dayIndex + 1) % 6;
  return rokuyouArray[rokuyouIndex];
}
