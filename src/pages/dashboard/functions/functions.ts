export function getUserLocalStorage() {
  const user = localStorage.getItem("user");

  if (!user) {
    return;
  }
  const parsedUser = JSON.parse(user);

  return parsedUser;
}
