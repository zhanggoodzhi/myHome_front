function getAuthData() {
    const authData = localStorage.getItem('authData');
    if (authData) {
        return JSON.parse(authData);
    }
    return null;
}
export {getAuthData};