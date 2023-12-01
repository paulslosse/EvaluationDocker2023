CREATE DATABASE dockerdb;
use dockerdb;

CREATE TABLE article(
    ID int,
    nom text,
    description text,
    prix bigint(255)
);

INSERT INTO article VALUES ('1','T-shirt','lorem IPSUM','23');
INSERT INTO article VALUES ('2','Pantalon','lorem IPSUM lorem','23');
INSERT INTO article VALUES ('3','Combinaison','IPSUM lorem','23');
INSERT INTO article VALUES ('4','Chemise','lorem IPSUM IPSUM lorem','23');
INSERT INTO article VALUES ('5','Sac a dos','IPSUM lorem lorem','23');
INSERT INTO article VALUES ('6','Pull','IPSUM lorem','23');