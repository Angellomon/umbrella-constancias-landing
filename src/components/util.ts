export function emailIsValid(email?: string) {
  return email ? /\S+@\S+\.\S+/.test(email) : false;
}
