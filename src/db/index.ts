import Database from '@tauri-apps/plugin-sql';
import { getCurrentWindow } from "@tauri-apps/api/window";


export const dbclient = await Database.load('sqlite:devicematch.db');

await getCurrentWindow().onCloseRequested(async () => {
  await dbclient.close()
});


