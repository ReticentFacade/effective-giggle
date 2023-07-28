-- To execute, shift into current directory & use: psql -U postgres -d seedtosip_db -f setup.sql

-- To check if table exists or not: `psql -U postgres -d seedtosip_db -c "SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'users';"`

-- Drop table if it already exist 
DROP TABLE IF EXISTS users;

-- Create the table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL, 
    password VARCHAR(255) NOT NULL 
);
