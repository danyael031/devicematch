// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
//
use tauri_plugin_sql::{Migration, MigrationKind};

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let migrations = vec![Migration {
        version: 1,
        description: "create_initial_tables",
        sql: "
CREATE TABLE brands (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    image BLOB
);

CREATE TABLE devices (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    image BLOB,
    brand_id TEXT,
    FOREIGN KEY (brand_id) REFERENCES brands(id)
);

CREATE TABLE categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    image BLOB
);

CREATE TABLE device_compatibility (
    device1_id TEXT NOT NULL,
    device2_id TEXT NOT NULL,
    category_id TEXT NOT NULL,
    score INTEGER NOT NULL,
    UNIQUE(device1_id, device2_id, category_id),
    CHECK (device1_id < device2_id),
    CHECK (score BETWEEN 0 AND 5),
    FOREIGN KEY (device1_id) REFERENCES devices(id),
    FOREIGN KEY (device2_id) REFERENCES devices(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
",
        kind: MigrationKind::Up,
    }];

    tauri::Builder::default()
        .plugin(
            tauri_plugin_sql::Builder::new()
                .add_migrations("sqlite:phonecases.db", migrations)
                .build(),
        )
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
