const toFixedDown = (number, digits = 2) => {
  const re = new RegExp("^-?\\d+(?:\\.\\d{0," + digits + "})?");
  const match = number.toString().match(re);
  return match ? match[0] : "0";
}

const abs = (number) => {
  return Math.abs(number)
}

export { toFixedDown, abs };