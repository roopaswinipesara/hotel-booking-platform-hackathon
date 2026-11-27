export const STORAGE_KEYS = {
  accounts: 'stayeaseAccounts',
  session: 'stayeaseUser',
  bookings: 'stayeaseBookings',
};

export function readFromStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved === null ? fallback : JSON.parse(saved);
  } catch (error) {
    console.warn(`Could not read ${key} from Local Storage:`, error);
    return fallback;
  }
}

export function writeToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Could not save ${key} to Local Storage:`, error);
    return false;
  }
}

export function removeFromStorage(key) {
  localStorage.removeItem(key);
}

// Demo only: a browser-side hash prevents a plain-text password from being saved,
// but it is NOT a substitute for server-side authentication in a real application.
export async function hashDemoPassword(password) {
  if (!window.crypto?.subtle) {
    throw new Error('Secure password hashing is unavailable. Open the app through the Vite localhost URL.');
  }

  const bytes = new TextEncoder().encode(password);
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}
