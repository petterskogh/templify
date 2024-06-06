import { getItemAsync, setItemAsync } from "expo-secure-store";

type ItemList = string[];

export async function saveItemList(name: string, list: ItemList): Promise<void> {
  await save(name, list);
}

export async function loadItemList(name: string): Promise<ItemList> {
  return await load(name);
}

async function save(key: string, value: any): Promise<void> {
  await setItemAsync(key, JSON.stringify(value));
}

async function load(key: string): Promise<any> {
  const value = await getItemAsync(key);
  if (value === null) return null;
  return JSON.parse(value);
}