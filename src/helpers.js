export function convertToF(temp) {
  return temp * (9 / 5) + 32;
}

export function formatAddress(address) {
  return `${address.city}, ${address.state}`.toUpperCase();
}

export function convertToMph(wind) {
  return wind * 0.621371;
}
