import Database from '@tauri-apps/plugin-sql';

export const dbclient = await Database.load('sqlite:phonecases.db');
