// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri_plugin_sql::{Migration, MigrationKind};

fn main() {
    let migrations = vec![
        // Define your migrations here
        Migration {
            version: 1,
            description: "create_initial_tables",
            sql: "
CREATE TABLE phones(id INTEGER PRIMARY KEY, name TEXT);
CREATE TABLE cases(id INTEGER PRIMARY KEY), name TEXT);
",
            kind: MigrationKind::Up,
        },
    ];

    let _ = tauri::Builder::default().plugin(
        tauri_plugin_sql::Builder::default()
            .add_migrations("sqlite:phonecases.db", migrations)
            .build(),
    );

    phonecases_lib::run()
}
