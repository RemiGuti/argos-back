DROP TABLE IF EXISTS argos;

CREATE TABLE argos (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    argo_name varchar(255) NOT NULL
);

INSERT INTO argos
VALUES (
    1,
    'Eleftheria'
);