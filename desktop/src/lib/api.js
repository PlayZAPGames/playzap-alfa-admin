import { getToken } from './auth';

import baseUrl from '../config';


export async function loginUser(payload) {
  const res = await fetch(`${baseUrl}/api/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    credentials: 'include'
  });
  return res.json();
}

export async function setup2FA(payload) {
  const res = await fetch(`${baseUrl}/api/admin/setup-2fa`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    credentials: 'include'
  });
  return res.json();
}
export async function checkAuthStatus() {
  const res = await fetch(`${baseUrl}/api/admin/check-auth`, {
    credentials: 'include'
  });
  return res.json();
}

// export async function fetchProtectedData() {
//   const res = await fetch(`${baseUrl}/api/admin-data`, {
//     headers: {
//       'Authorization': `Bearer ${getToken()}`
//     }
//   });
//   return res.json();
// }
