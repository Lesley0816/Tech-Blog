# Tech-Blog

A CMS-style blog site built with Node.js, Express.js, React.js, and PostgreSQL. This project allows users to publish articles, blog posts, and manage their content through a user-friendly interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**:
  - Sign up, login, and logout functionality with JWT authentication.
- **Homepage**:
  - View existing blog posts.
- **Dashboard**:
  - Create, update, delete blog posts.
- **Individual Post Page**:
  - View details of a specific blog post.
  - Comment on posts.
- **Responsive Design**:
  - Mobile-friendly layout using React.js components.

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - PostgreSQL
  - Sequelize (ORM)
  - JSON Web Tokens (JWT) for authentication
- **Frontend**:
  - React.js
  - React Router
  - Axios for API requests
- **Development Tools**:
  - Git & GitHub for version control
  - VS Code as the code editor
  - Postman for API testing

### Prerequisites

- Node.js (v14.x or higher)
- PostgreSQL
- Git

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <project-folder>

Certainly! Below is a template for a README.md file tailored for your CMS-style blog site project. This README.md file will provide an overview of your project, instructions on how to set it up, and other relevant information.

markdown
Copy code
# CMS-Style Blog Site

A CMS-style blog site built with Node.js, Express.js, React.js, and PostgreSQL. This project allows users to publish articles, blog posts, and manage their content through a user-friendly interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**:
  - Sign up, login, and logout functionality with JWT authentication.
- **Homepage**:
  - View existing blog posts.
- **Dashboard**:
  - Create, update, delete blog posts.
- **Individual Post Page**:
  - View details of a specific blog post.
  - Comment on posts.
- **Responsive Design**:
  - Mobile-friendly layout using React.js components.

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - PostgreSQL
  - Sequelize (ORM)
  - JSON Web Tokens (JWT) for authentication
- **Frontend**:
  - React.js
  - React Router
  - Axios for API requests
- **Development Tools**:
  - Git & GitHub for version control
  - VS Code as the code editor
  - Postman for API testing

## Setup Instructions

### Prerequisites

- Node.js (v14.x or higher)
- PostgreSQL
- Git

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <project-folder>
2. **Install dependencies**:
- Backend:
   cd backend
   npm install

- Frontend:
  cd frontend
  npm install
 
3. **Set up the database**:
Create a PostgreSQL database and configure the connection in backend/config/config.js.

4. **Start the backend server**:
cd backend
npm start

5. **Start the frontend development server**:
cd frontend
npm start

6. **Access the application**:
Open your web browser and go to http://localhost:3000 to view the CMS-style blog site.


Certainly! Below is a template for a README.md file tailored for your CMS-style blog site project. This README.md file will provide an overview of your project, instructions on how to set it up, and other relevant information.

markdown
Copy code
# CMS-Style Blog Site

A CMS-style blog site built with Node.js, Express.js, React.js, and PostgreSQL. This project allows users to publish articles, blog posts, and manage their content through a user-friendly interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [License](#license)

## Features

- **User Authentication**:
  - Sign up, login, and logout functionality with JWT authentication.
- **Homepage**:
  - View existing blog posts.
- **Dashboard**:
  - Create, update, delete blog posts.
- **Individual Post Page**:
  - View details of a specific blog post.
  - Comment on posts.
- **Responsive Design**:
  - Mobile-friendly layout using React.js components.

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - PostgreSQL
  - Sequelize (ORM)
  - JSON Web Tokens (JWT) for authentication
- **Frontend**:
  - React.js
  - React Router
  - Axios for API requests
- **Development Tools**:
  - Git & GitHub for version control
  - VS Code as the code editor
  - Postman for API testing

## Setup Instructions

### Prerequisites

- Node.js (v14.x or higher)
- PostgreSQL
- Git

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <project-folder>
Install dependencies:

Backend:

bash
Copy code
cd backend
npm install
Frontend:

bash
Copy code
cd frontend
npm install
Set up the database:

Create a PostgreSQL database and configure the connection in backend/config/config.js.
Start the backend server:

bash
Copy code
cd backend
npm start
Start the frontend development server:

bash
Copy code
cd frontend
npm start
Access the application:

Open your web browser and go to http://localhost:3000 to view the CMS-style blog site.

## Usage
- Homepage: View existing blog posts.
- Dashboard: Manage your blog posts (create, update, delete).
- Individual Post Page: View details of a specific blog post, comment on posts.

## API Endpoints
- GET /api/posts: Get all blog posts.
- GET /api/posts/:id: Get a specific blog post by ID.
- POST /api/posts: Create a new blog post.
- PUT /api/posts/:id: Update a blog post by ID.
- DELETE /api/posts/:id: Delete a blog post by ID.
- POST /api/posts/:id/comments: Add a comment to a blog post.

## Deployment
- Deploy the backend and frontend to a hosting platform (e.g., Heroku, AWS).
- Set up a production-ready PostgreSQL database.
- Update API URLs in the frontend (src/services/api.js) to point to the deployed backend.

## License
This project is licensed under the MIT License.