/* Création table Etudiant */
CREATE TABLE Etudiant
(
    numero_immatriculation INT PRIMARY KEY,
    nom                    VARCHAR(255) NOT NULL,
    prenom                 VARCHAR(255) NOT NULL,
    age                    INT          NOT NULL
);

/* Création table Matière */
CREATE TABLE Matière
(
    identification VARCHAR(255) PRIMARY KEY,
    nom            VARCHAR(255) NOT NULL,
    coefficient    INT          NOT NULL
);

/**
    * Création table Note
    * La clé primaire est composée de la clé étrangère de la table Etudiant et de la clé étrangère de la table Matière
    */


CREATE TABLE Note
(
    numero_immatriculation INT          NOT NULL,
    identification         VARCHAR(255) NOT NULL,
    valeur                 INT          NOT NULL,
    PRIMARY KEY (numero_immatriculation, identification),
    FOREIGN KEY (numero_immatriculation) REFERENCES Etudiant (numero_immatriculation),
    FOREIGN KEY (identification) REFERENCES Matière (identification)
);
