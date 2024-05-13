

# Simple Todo List Application

This is a simple todo list application built with the PERN stack (PostgreSQL, Express.js, React.js, Node.js). The application allows users to manage tasks by adding, updating, completing, and deleting them.

## Features

- **Add Task**: Users can add new tasks to the todo list.
- **Update Task**: Tasks can be edited and updated with new information.
- **Complete Task**: Users can mark tasks as completed.
- **Delete Task**: Tasks can be removed from the list.
- **Filter Tasks**: Users can filter tasks based on their completion status (All, Active, Completed).
  
## Technologies Used

- **Frontend**:
  - React.js
  - Axios (for making HTTP requests)
  - Bootstrap (for styling)

- **Backend**:
  - Node.js
  - Express.js (RESTful API)
  - PostgreSQL (database)

## Setup Instructions

To run this application locally, follow these steps:

### Prerequisites

- Node.js (with npm) installed on your machine
- PostgreSQL installed and running

### Backend Setup

1. Clone this repository to your local machine.
2. Navigate to the `backend` directory.
3. Install dependencies:
   ```
   npm install
   ```
4. Create a PostgreSQL database named `todo_app`.
5. Update the database connection settings in `backend/db.js` if necessary.
6. Run database migrations to set up the required tables:
   ```
   npm run migrate
   ```
7. Start the backend server:
   ```
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the frontend development server:
   ```
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## API Endpoints

- **GET /tasks**: Get all tasks.
- **POST /tasks**: Add a new task.
- **PUT /tasks/:id**: Update a task.
- **DELETE /tasks/:id**: Delete a task.

## Folder Structure

- **`backend`**: Contains the backend code (Node.js and Express.js).
  - `db.js`: Database connection and query functions.
  - `server.js`: Entry point for the Express.js server.
  - `routes/tasks.js`: Defines routes for task-related API endpoints.
  - `migrations/`: Database migration files.
  
- **`frontend`**: Contains the frontend code (React.js).
  - `src/`: Source files for the React.js application.
    - `components/`: React components for the todo list interface.
    - `services/`: Axios service for making HTTP requests to the backend.
    - `App.js`: Main component rendering the todo list.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
