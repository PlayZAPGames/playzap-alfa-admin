const TOKEN_KEY = 'jwt_token';

const isProduction =  import.meta.env.VITE_ENV === 'production';

// Cookie configuration - UPDATE THIS WITH YOUR DOMAIN
const COOKIE_CONFIG = {
  domain: isProduction? '.playzap.com':'localhost', // Change to your actual domain
  path: '/',
  // secure: process.env.NODE_ENV === 'production',
  secure: false,
  sameSite: 'lax',
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
};

// LocalStorage functions (keep existing)
export function saveToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getUserFromToken() {
  try {
    const token = getToken();
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload;
  } catch {
    return null;
  }
}

export function hasRole(role) {
  const user = getUserFromToken();
  return user?.role === role;
}

// NEW: Cookie functions for cross-subdomain authentication
export function setAuthCookie(token) {
  if (typeof document !== 'undefined') {

    console.log("setting cookies");
    
    const expires = new Date();
    expires.setTime(expires.getTime() + COOKIE_CONFIG.maxAge);
    
    document.cookie = `admin_token=${token}; expires=${expires.toUTCString()}; domain=${COOKIE_CONFIG.domain}; path=${COOKIE_CONFIG.path}; secure=${COOKIE_CONFIG.secure}; sameSite=${COOKIE_CONFIG.sameSite}`;
  }
}

export function getAuthCookie() {
  if (typeof document !== 'undefined') {
    const name = 'admin_token=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
  }
  return null;
}

export function clearAuthCookie() {
  if (typeof document !== 'undefined') {
    document.cookie = `admin_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${COOKIE_CONFIG.domain}; path=${COOKIE_CONFIG.path};`;
  }
}

// NEW: Combined authentication functions
export function login(token) {
  saveToken(token); // Store in localStorage
  setAuthCookie(token); // Store in cross-subdomain cookie
}

export function logout() {
  clearToken(); // Clear localStorage
  clearAuthCookie(); // Clear cookie from all subdomains
}

// NEW: Check if user is authenticated (checks both methods)
export function isAuthenticated() {
  return !!(getToken() || getAuthCookie());
}

// NEW: Get token from any available source
export function getAnyToken() {
  return getToken() || getAuthCookie();
}