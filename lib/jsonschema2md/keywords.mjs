const used = new Set();

export function keyword(str) {
  used.add(str[0]);
  return str.join('');
}

export function report() {
  return used;
}
