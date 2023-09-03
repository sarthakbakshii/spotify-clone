function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

export const convertMsToTime = (milliseconds: any) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.round((milliseconds % 60000) / 1000);

  return seconds === 60
    ? { min: minutes+1 , sec : 0o0}
    : { min: minutes , sec : padTo2Digits(seconds)}

};
