import { JwtPayload, jwtDecode } from 'jwt-decode';
import { ACCESS_TOKEN_KEY } from 'react-native-dotenv';

import * as Storage from './Storage';

/**
 * @description Stores token. Returns true/false if succeeded or not.
 * @returns Boolean
 * @param token
 */
export const store = async (token: string) => {
  if (!isValid(token)) {
    return false;
  }
  return Storage.store(ACCESS_TOKEN_KEY, token);
};

/**
 * @description Gets stored token
 * @returns String
 */
export const get = async () => {
  return Storage.get(ACCESS_TOKEN_KEY);
};

/**
 * @description Decodes a token. A falsy token will return {}.
 * @returns Object
 * @param token
 */
export const decode = async (token: string): Promise<JwtPayload> => {
  if (!isValid(token)) {
    return {};
  }

  try {
    return jwtDecode(token);
  } catch (err) {
    return {};
  }
};

/**
 * @description Returns expiration date as Unix Timestamp (ms) or null.
 * @returns Number || null
 * @param token
 */
export const getTokenExpiration = async (token: string): Promise<number | undefined> => {
  if (!isValid(token)) {
    return undefined;
  }
  const decodedToken: JwtPayload = await decode(token);
  return decodedToken.exp || undefined;
};

/**
 * @description Checks if a token is expired (with minute precision).
 * @param token The token to check.
 * @returns True if the token is expired or invalid, false otherwise.
 */
export const isExpired = async (token: string): Promise<boolean> => {
  if (!isValid(token)) {
    return true;
  }

  const expirationDate = await getTokenExpiration(token);
  const currentTimeInSeconds = new Date().getTime() / 1000;

  return expirationDate === undefined || expirationDate < currentTimeInSeconds;
};

/**
 * @description Checks if token is valid
 * @returns Boolean
 * @param token
 */
export const isValid = (token: string) => {
  return !!token;
};

/**
 * @description Removes token from storage
 * @returns Boolean
 */
export const remove = async () => {
  return Storage.remove(ACCESS_TOKEN_KEY);
};
