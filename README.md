🎬 Netflix-x

A Netflix-inspired web app built with React, Firebase Authentication (for auth), Firestore (for database), and The Movie Database (TMDB) API for fetching movies and TV shows.

🚀 Features

🔑 User Authentication (Signup / Signin / Signout) using Firebase Auth

🎥 Browse latest, popular, and trending movies & TV shows

🔍 Search for movies and TV shows by title

📌 Add movies to your "My List" (stored in Firebase Firestore)

▶️ Watch trailers with embedded YouTube player

📱 Fully responsive UI

🛠️ Tech Stack

Frontend: React + Vite (or CRA)

Styling: TailwindCSS / CSS Modules

Authentication & Database: Firebase Auth + Firestore

API: TMDB API

Hosting: Vercel / Netlify / Firebase Hosting

⚙️ Installation

Clone the repo and install dependencies:

git clone https://github.com/yourusername/Netflix-x.git
cd Netflix-x
npm install


Create a .env file in the project root:

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_TMDB_API_KEY=your_tmdb_api_key

▶️ Running the App

Start the development server:

npm run dev


Build for production:

npm run build

🔑 Firebase Setup

Go to Firebase Console
.

Create a new project.

Enable Authentication → Sign-in methods (Email/Password, Google, GitHub, etc).

Enable Firestore Database (if you want to store "My List").

Copy Firebase SDK config and paste into your .env.

Create a Firestore collection for user "My List" (optional):

mylist {
  userId: string,
  movieId: string,
  createdAt: timestamp
}

🎥 TMDB Setup

Go to TMDB
.

Create an account and generate an API key.

Add it to your .env file as VITE_TMDB_API_KEY.

📂 Project Structure
Netflix-x/
 ├── public/              # Static assets
 ├── src/
 │   ├── components/      # Reusable UI components
 │   ├── pages/           # App pages (Home, Login, Player, MyList)
 │   ├── services/        # Firebase + TMDB API calls
 │   ├── App.jsx          # App routes
 │   ├── main.jsx         # Entry point
 ├── .env                 # Environment variables
 ├── package.json
 └── README.md