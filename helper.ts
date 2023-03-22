export const truncate = (des: string, value: number, limit: number) => {
  if (des.length > value) {
    return des.substring(0, limit) + "...";
  } else {
    return des;
  }
};
