# SOWA Food Ordering E-Commerce Platform

## Project Overview

This project is a **Food Ordering E-Commerce Platform (SOWA)** developed as part of an academic assignment.

The system allows users to browse dishes and place food orders through a web interface.

The project consists of two main parts:

* **Frontend** – Developed using React
* **Backend** – REST API developed using Spring Boot

The backend connects to a **MySQL database** that stores dish information.

---

# Project Structure

```
food-ordering-website
│
├── frontend/              # React frontend application
├── backend/               # Spring Boot backend (developed using Spring Tool Suite)
│
├── database/
│   └── fastfood_db.sql    # Database schema and sample data
│
└── README.md              # Project documentation
```

---

# Technologies Used

## Frontend

* React
* JavaScript
* HTML
* CSS

## Backend

* Java
* Spring Boot
* Spring Tool Suite

## Database

* MySQL
* phpMyAdmin

---

# Database Setup

The backend connects to a **MySQL database named `fastfood_db`**.

Follow the steps below to create and configure the database.

## Step 1 – Install MySQL

Install MySQL Server on your computer.

You may install MySQL using:

* XAMPP
* WAMP
* MySQL Community Server

Make sure the **MySQL service is running**.

---

## Step 2 – Open phpMyAdmin

Open phpMyAdmin in your browser:

```
http://localhost/phpmyadmin
```

Login using your MySQL credentials.

Username:

```
root
```

Password:

```
YOUR_PASSWORD
```

Use the password configured during MySQL installation.

---

## Step 3 – Create the Database

Create a new database called:

```
fastfood_db
```

---

## Step 4 – Import the Database Schema

1. Click on the **fastfood_db** database
2. Go to the **Import** tab
3. Upload the file:

```
fastfood_db.sql
```

4. Click **Go**

This will automatically create the required tables.

---

# Database Schema

The main table used in this project is:

### dishes

| Column Name | Type              |
| ----------- | ----------------- |
| dish_id     | INT (Primary Key) |
| dish_name   | VARCHAR           |
| dish_cost   | DOUBLE            |

This table stores the food items available in the system.

---

# Backend Configuration

The backend is configured using **application.properties**.

Location:

```
backend/src/main/resources/application.properties
```

Database configuration:

```
spring.datasource.url=jdbc:mysql://localhost:3306/fastfood_db
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
```

Replace `YOUR_PASSWORD` with your local MySQL password.

---

# Running the Backend

1. Open the backend project in **Spring Tool Suite**
2. Ensure MySQL is running
3. Run the Spring Boot application

The backend server will start and connect to the MySQL database.

---

# Running the Frontend

The frontend was created using **Create React App**.

Navigate to the frontend directory:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start the React development server:

```
npm start
```

The application will run in development mode.

Open the browser and visit:

```
http://localhost:3000
```

The page will reload automatically when you make changes.

---

# Build the Frontend

To create a production build:

```
npm run build
```

This will generate an optimized build inside the **build** folder.

---

# Implementation Plan

This implementation includes the following:

### Project Root

* Added **fastfood_db.sql** to create the database schema.
* Added **README.md** for project documentation and setup instructions.

### Backend

Updated the database connection in **application.properties** to use:

```
fastfood_db
```

instead of:

```
sowa_db
```

---

# Verification Plan

### Automated Tests

Not applicable (documentation and SQL script creation).

### Manual Verification

The following checks were performed:

* Verified the README setup instructions
* Verified SQL syntax in `fastfood_db.sql`
* Confirmed backend database configuration


