# Inventory Management System

This is a simple, unstyled inventory management system built with Node.js, Express, and PostgreSQL. It allows you to manage categories and products.

## Features

- Add, edit, and delete categories
- Add, edit, and delete products
- Filter products by category

Install dependencies:

npm install

Set up the database:

DATABASE_HOST=your_database_host
DATABASE_USER=your_database_user
DATABASE_PASSWORD=your_database_password
DATABASE_NAME=your_database_name
DATABASE_URL=your_database_url

Create a PostgreSQL database and run the SQL script in init.sql to create the necessary tables.
Create a .env file in the root directory and add your database connection details:

Usage
Start the development server:

Open your browser and navigate to http://localhost:8000.

Project Structure

controllers: Contains the controller files for handling requests.
db: Contains the database connection pool and queries.
public: Contains static files like CSS.
routes: Contains the route files for different endpoints.
views: Contains the EJS templates for rendering HTML.
