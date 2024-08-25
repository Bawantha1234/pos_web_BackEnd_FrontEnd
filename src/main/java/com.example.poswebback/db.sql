DROP TABLE IF EXISTS Customer;
CREATE TABLE IF NOT EXISTS Customer
(
    id      VARCHAR(8),
    name    VARCHAR(30),
    address VARCHAR(30),
    salary  double,
    CONSTRAINT PRIMARY KEY (id)
);
SHOW TABLES;
DESCRIBE Customer;

DROP TABLE IF EXISTS Item;
CREATE TABLE IF NOT EXISTS Item
(
    code        VARCHAR(8),
    description VARCHAR(50),
    qty         INT(5)        DEFAULT 0,
    unitPrice   DECIMAL(10, 2) DEFAULT 0.00,
    CONSTRAINT PRIMARY KEY (code)
);
SHOW TABLES;
DESCRIBE Item;
