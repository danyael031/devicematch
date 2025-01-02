pub static CREATE_INITIAL_TABLES: &str = "
CREATE TABLE brands (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    image BLOB
);

CREATE TABLE devices (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    image BLOB,
    brand_id INTEGER,
    FOREIGN KEY (brand_id) REFERENCES brands(id)
);

CREATE TABLE categories (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    image BLOB
);

CREATE TABLE device_compatibility (
    id INTEGER PRIMARY KEY,
    device1_id INTEGER NOT NULL,
    device2_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    UNIQUE(device1_id, device2_id, category_id),
    CHECK (device1_id < device2_id),
    FOREIGN KEY (device1_id) REFERENCES devices(id),
    FOREIGN KEY (device2_id) REFERENCES devices(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
";
