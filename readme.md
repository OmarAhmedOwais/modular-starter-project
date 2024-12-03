# General Management App

## Overview

The **General Management App** is a RESTful API designed for managing various resources within an application. It includes functionalities for user authentication, resource management, and detailed API documentation. This project is built with TypeScript, Express, and TypeORM.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [API Documentation](#api-documentation)
- [Migrations](#migrations)
- [Testing](#testing)
- [License](#license)

## Features

- **User Authentication**: Register and login users with JWT-based authentication.
- **Resource Management**: CRUD operations for managing resources.
- **Search Functionality**: Search resources by query.
- **Role-Based Access Control**: Different roles (admin, user) with specific permissions.
- **API Documentation**: Automatically generated documentation with Swagger.

## Technologies

- **Node.js**: JavaScript runtime for server-side logic.
- **Express**: Web framework for Node.js.
- **TypeScript**: Superset of JavaScript with static types.
- **TypeORM**: ORM for TypeScript and JavaScript.
- **Swagger**: API documentation generator.
- **Jest**: Testing framework.
- **TypeScript Node Dev**: Development tool for TypeScript.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/OmarAhmedOwais/general-management-app.git
   cd general-management-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**: Create a `.env` file in the root directory with the following content:

   ```env
   JWT_SECRET=MySecret
   PORT=3001
   BCRYPT_SALT=MySALT
   CORS_ORIGIN=*
   JWT_EXPIRES_IN=1h
   ```

4. **Compile TypeScript**:

   ```bash
   npm run build
   ```

## Configuration

1. **Environment Variables**: The application relies on environment variables defined in a `.env` file. Example:

   ```env
   JWT_SECRET=MySecret
   PORT=3001
   BCRYPT_SALT=MySALT
   CORS_ORIGIN=*
   JWT_EXPIRES_IN=1h
   ```

2. **Data Source Configuration**: Configure your `DataSource` instance in `src/data-source.ts`.

## Scripts

- **Start the Application**: Runs the compiled code.

  ```bash
  npm start
  ```

- **Run in Development Mode**: Runs the application with `ts-node-dev` for auto-reloading.

  ```bash
  npm run start:dev
  ```

- **Run in Production Mode**: Runs the application with `ts-node`.

  ```bash
  npm run start:prod
  ```

- **Build the Project**: Compiles TypeScript code to JavaScript.

  ```bash
  npm run build
  ```

- **Run Linting**: Checks the code for linting errors.

  ```bash
  npm run lint
  ```

- **Fix Linting Errors**: Automatically fixes linting issues.

  ```bash
  npm run lint:fix
  ```

- **Generate Migration**: Creates a new migration file.

  ```bash
  npm run migration:generate -- -n MigrationName
  ```

- **Run Migrations**: Applies pending migrations to the database.

  ```bash
  npm run migration:run
  ```

- **Revert Migrations**: Reverts the last migration.

  ```bash
  npm run migration:revert
  ```

- **Seed Database**: Runs seed scripts to populate the database.

  ```bash
  npm run seed
  ```

- **Prepare for Git Hooks**: Installs Husky Git hooks.

  ```bash
  npm run prepare
  ```

## API Documentation

API documentation is generated using Swagger. To view the documentation:

1. **Start the Application** (ensure the server is running):

   ```bash
   npm start
   ```

2. **Navigate to Swagger UI**: Open your browser and go to `http://localhost:3001/api-docs` to view the interactive API documentation.

## Migrations

Migrations are used to manage database schema changes. They are configured using TypeORM. 

- **Generate a Migration**: Creates a new migration file.

  ```bash
  npm run migration:generate -- -n MigrationName
  ```

- **Run Migrations**: Applies pending migrations.

  ```bash
  npm run migration:run
  ```

- **Revert Migrations**: Rolls back the last migration.

  ```bash
  npm run migration:revert
  ```
  
## License

This project is licensed under the [MIT License](LICENSE).

---
