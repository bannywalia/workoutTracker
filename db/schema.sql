-- Creates the user_db database --
DROP DATABASE IF EXISTS workout_db;
CREATE DATABASE workout_db;

USE workout_db;

CREATE TABLE workouts(
  today VARCHAR(30) NOT NULL,
  workout_id INT NOT NULL,
  excercise VARCHAR(100) NOT NULL,
  duration INT NOT NULL,
  weight INT NOT NULL,
  sets INT NOT NULL,
  reps INT NOT NULL
);

