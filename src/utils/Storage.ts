import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageSystem = AsyncStorage;

/**
 * @description Stores a value at the specified key.
 * Returns true if successful, false otherwise.
 * @param key
 * @param value
 */
export const store = async (key: string, value: any) => {
  try {
    await StorageSystem.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    return false;
  }
};

/**
 * @description Retrieve a value with the specified key.
 * Returns the value if successful, null otherwise.
 * @param key
 */
export const get = async (key: string) => {
  try {
    const value: string | null = await StorageSystem.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (err) {
    return null;
  }
};

/**
 * @description Remove a value with the specified key.
 * Returns true if successful, false otherwise.
 * @param key
 */
export const remove = async (key: string) => {
  try {
    await StorageSystem.removeItem(key);
    return true;
  } catch (err) {
    return null;
  }
};

/**
 * @description Gets all keys known to your App, for all callers, libraries.
 * Returns an Array of Strings if successful, null otherwise
 */
export const getAllKeys = async () => {
  try {
    return await StorageSystem.getAllKeys();
  } catch (err) {
    return null;
  }
};

/**
 * @description Clear all the stored data
 */
export const clearAll = async () => {
  await StorageSystem.clear();
};
