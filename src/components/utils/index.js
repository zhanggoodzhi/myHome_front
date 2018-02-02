function getAuthData() {
  const authData = localStorage.getItem('authData');
  if (authData) {
    return JSON.parse(authData);
  }
  return null;
}

function cesh(a, b) {
  var c = a + b + 666666666666666666;
  return c;
}
export {
  getAuthData,
  cesh
};
