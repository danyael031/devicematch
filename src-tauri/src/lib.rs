// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
//
//
use tauri_plugin_sql::{Migration, MigrationKind};

mod migrations {
    pub mod create_initial_tables;
    pub mod init_default_data;
}

//#[tauri::command]
//fn greet(name: &str) -> String {
//    format!("Hello, {}! You've been greeted from Rust!", name)
//}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let migrations = vec![
        Migration {
            version: 1,
            description: "create_initial_tables",
            sql: migrations::create_initial_tables::CREATE_INITIAL_TABLES,
            kind: MigrationKind::Up,
        },
        Migration {
            version: 2,
            description: "init_default_data",
            sql: migrations::init_default_data::INIT_DEFAULT_DATA,
            kind: MigrationKind::Up,
        },
    ];

    tauri::Builder::default()
        .plugin(
            tauri_plugin_sql::Builder::new()
                .add_migrations("sqlite:devicematch.db", migrations)
                .build(),
        )
        .plugin(tauri_plugin_opener::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
