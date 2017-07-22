DROP TABLE IF EXISTS information;



CREATE TABLE information (
	id SERIAL NOT NULL,
  ss int PRIMARY KEY,
  first VARCHAR NOT NULL,
  last VARCHAR ,
  gender VARCHAR   NOT NULL,
  species VARCHAR  NOT NULL,
  height  FLOAT NOT NULL,
  color VARCHAR   NOT NULL,
  occupation VARCHAR NOT NULL,
  wanted BOOLEAN NOT NULL,
  city VARCHAR   NOT NULL,
  image VARCHAR NOT NULL,
  status VARCHAR ,
  startdate VARCHAR,
  finishdate VARCHAR,
  telnum bigint
);
