CREATE TABLE proposals (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    organisation VARCHAR(255) NOT NULL,
    email VARCHAR(320) NOT NULL,
    purpose TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_created_at (created_at)
);