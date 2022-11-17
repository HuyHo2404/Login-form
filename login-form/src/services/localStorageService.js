class TokenService {
    GetAccessToken() {
        return localStorage.getItem('access_token');
    }
    SetAccessToken(accessToken) {
        return localStorage.setItem('access_token', accessToken);
    }
}

export default new TokenService();
