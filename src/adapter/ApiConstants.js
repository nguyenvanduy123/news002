const BASE_PREFIX = 'http://127.0.0.1:8000'

const ApiConstants = {
    LOGIN: `${BASE_PREFIX}/auth/login`,
    LOGOUT: `${BASE_PREFIX}/auth/login/logout`,
    REFRESH_TOKEN: `${BASE_PREFIX}/auth/login/refresh-token`,
    AUTH: `${BASE_PREFIX}/auth/me`,
    LOGIN_: `${BASE_PREFIX}/api/FM/login`,
    ///duy test dữ liệu nhà cung cấp
     Supplier: ` http://localhost:3984/Data`,
    // duy test dũ liệu thành phố
    Province:`http://localhost:3698/tinh`,
    ///duy test trạng thái
    status:`http://localhost:5678/trangthai`,
    ////duy test///
    distrist:`http://localhost:1234/quanhuyen`,
    ///
    wards:`http://localhost:1987/xathon`,
    //
    category:`http://localhost:9876/danhmuc`,
    ///
    code:`http://localhost:8765/macode`,
}
    
export default ApiConstants

export { BASE_PREFIX }
