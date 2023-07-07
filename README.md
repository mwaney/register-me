# register-me
This is a simple Node.js backend application that demonstrates CRUD (Create, Read, Update, Delete) operations for adding users to MongoDB.

## Prerequisites

Before running the application, make sure you have the following installed on your machine:

- Node.js (v12 or above)
- MongoDB (Make sure MongoDB is running on your local machine or provide the connection details for a remote MongoDB server)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mwaney/register-me.git
   ```
2.Install the dependencies.
```bash
cd register-me
npm install
```
3. Configure MongoDB connection

## Usage
1. Start the application:

```bash
npm start
```
2. The application will be running at http://localhost:5050.


3. Use an API testing tool like Postman, thunder client or cURL to perform the following operations:

- **Get all users**
  - Endpoint: __GET /api/users__
  - Description: Retrieve all users from the database.
- **Get a user by ID**
  - Endpoint: __GET /api/users/:id__
  - Description: Retrieve a user by their ID.
- **Add a new user**
  - Endpoint: __POST /api/users__
  - Description: Create a new user.
  - Request body: __{ "name": "John Doe", "email": "johndoe@example.com", "password": "password123" }__
- **Update a user by ID**
  - Endpoint: __PUT /api/users/:id__
  - Description: Update a user by their ID.
  - Request body: __{ "name": "Updated Name" } (You can include any combination of name, email, and password fields)__
- **Delete a user by ID**
  - Endpoint: __DELETE /api/users/:id__
  - Description: Delete a user by their ID.
## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.








