# Next.js Blog with MongoDB and Auth.js

This is a **blog application** built with **Next.js**, **MongoDB**, and **Auth.js** for authentication. The application provides users with a platform to create, edit, and view blog posts, with support for secure authentication and data persistence.

## Features

- **User Authentication**: Secure user authentication using Auth.js
- **MongoDB Database**: Stores blog posts and user data
- **Next.js**: Built with the Next.js framework for fast and SEO-friendly performance
- **CRUD Operations**: Create, Read, Update, Delete blog posts
- **Responsive Design**: Optimized for all devices

## Tech Stack

- **Next.js**: Frontend framework
- **MongoDB**: NoSQL database for data storage
- **Auth.js**: Authentication solution
- **React.js**: Frontend library
- **CSS Modules**: Styling for components

## Prerequisites

- **Node.js** (v16 or later)
- **MongoDB**: Setup a MongoDB Atlas account or a local MongoDB server

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```env
# MongoDB Connection URI
MONGODB_URI=your_mongodb_connection_string

# Auth.js Secret Key
NEXTAUTH_SECRET=your_nextauth_secret

# Optional: NextAuth Provider Configuration (e.g., Google, GitHub)
NEXTAUTH_URL=http://localhost:3000
```

### 4. Run the Application

To start the application in development mode:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



## Usage

1. **Register/Login**: Users can register and log in using Auth.js with optional providers like Google or GitHub.
2. **Create Blog Posts**: Authenticated users can create new blog posts.
3. **Edit/Delete Posts**: Authenticated users can edit or delete their posts.
4. **Read Blog Posts**: All users (authenticated or not) can read available blog posts.

## Deployment

You can deploy this project on **Vercel** or any other platform that supports Next.js applications.

For deployment on Vercel, follow these steps:

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and connect your repository.
3. Add the environment variables in the Vercel project settings.
4. Deploy your application.

## Contributing

Feel free to open issues and submit pull requests for any improvements.

## License

This project is open-source and available under the MIT License.

## Contact

For any questions, feel free to reach out via [LinkedIn](https://www.linkedin.com/in/codewithbalaji/).
