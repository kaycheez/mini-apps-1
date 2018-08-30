DROP DATABASE checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE accounts (
  id int AUTO_INCREMENT,
  name varchar (45) UNIQUE,
  email varchar (45) UNIQUE,
  password varchar (50),
  address1 varchar (45),
  address2 varchar (45),
  city varchar (45),
  state varchar (45),
  zip varchar (45),
  phone int,
  credit int,
  expiration varchar (10),
  cvv int,
  billing int,
  PRIMARY KEY (id)
);
