# Booking web app - Hotel Booking Web App a is a full-stack hotel and stay booking platform, inspired by modern booking services Users can explore listings, add their own properties, edit, review, delete, and interact with dynamic features powered by real-time data .
🚀 Features

🖼️ Add, edit, and delete property listings (CRUD Operations)

🔎 Search functionality to find listings based on name, location, or keywords

🏷️ Category-based listings for easy browsing (e.g., beach stays, mountain retreats, city hotels)

💵 Price toggle with GST/Tax calculations

🛡️ Server-side validation for clean and secure data

🧹 Clean and modular MVC architecture

🧑‍🤝‍🧑 User authentication & authorization using bcrypt


🛠️ Technologies Used

Frontend: HTML, CSS, JavaScript, Tailwind, React

Backend: Node.js, Express.js

Database: MongoDB Atlas

Authentication: Jwt

Maps & Location Services: Mapbox Geocoding API

Cloud Storage: Cloudinary

Architecture Pattern: MVC (Model-View-Controller)

📦 Project Dependencies This project uses the following dependencies:

@mapbox/mapbox-sdk

cloudinary

connect-flash

connect-mongo

cookie-parser

dotenv

ejs

ejs-mate

express

express-session

mongoose

multer

nodemon


sharp
📦 Installation & Setup (Run Locally)

1. Clone the Repository
 git clone URL

3. Install the Dependencies
 npm install

3.Configure Environment Variables in root directory
```env

SECRET=yourSessionSecret
ATLASDB_URL=yourMongoDBAtlasURL
MAP_TOKEN=yourMapboxAccessToken

CLOUD_NAME=yourCloudinaryCloudName
CLOUD_API_KEY=yourCloudinaryAPIKey
CLOUD_API_SECRET=yourCloudinaryAPISecret
```env
4.Run the Server
 ``` node app.js ``` 
>

