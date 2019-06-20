-- Create the burgers_ database
CREATE DATABASE burgers_;
-- Select burgers_ as the DB to use
USE burgers_;
-- Create burgers table
CREATE TABLE burgers (
-- Unique id for each burger
item_id INT(5) NOT NULL auto_increment,
-- The burger's name
burger_name VARCHAR(25) NOT NULL,
-- Whether or not the burger has been devoured - default is false
devoured boolean NOT NULL default false,
-- Primary key is item_id
PRIMARY KEY (item_id)
);
