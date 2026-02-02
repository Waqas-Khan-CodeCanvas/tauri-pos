import { invoke } from "@tauri-apps/api/core";

export const login = (username, password) =>
  invoke("login", { username, password });

export const searchBooks = (query) =>
  invoke("search_books", { query });

export const completeSale = (items) =>
  invoke("complete_sale", { items });

export const getInventory = () =>
  invoke("get_inventory");

export const getReports = () =>
  invoke("get_reports");
