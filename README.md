![pearbnb](https://user-images.githubusercontent.com/102837663/197653551-04239be8-0717-472e-b010-c49eb731e0d6.png)

Looking for vacation rentals, cabins, beach houses, and/or unique homes around the world? pearbnb is where you can find all these things!
(Inspired by the popular website, [airbnb](https://www.airbnb.com/))

**🚀 Live site: [pearbnb](https://pearbnb-final.herokuapp.com/) **

# 🖱 Wiki Links
* [API Documentation](https://github.com/MacFlyOSX/pearBnB/wiki/API-Documentation)
* [Database Schema](https://github.com/MacFlyOSX/pearBnB/wiki/Database-Schema)
* [Feature List](https://github.com/MacFlyOSX/pearBnB/wiki/Feature-List)
* [Redux Store Shape](https://github.com/MacFlyOSX/pearBnB/wiki/Redux-Store-Shape)
* [User Stories](https://github.com/MacFlyOSX/pearBnB/wiki/User-Stories)
* [Wireframes](https://github.com/MacFlyOSX/pearBnB/wiki/Wireframes)

# 🧑‍💻 Under the Hood

## 🤖 Integrated Web Technologies
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## 💾 Database
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) 
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

## ☁️ Hosting
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

# 🛬 Landing Page
![Screen Shot 2022-11-06 at 11 12 03 PM](https://user-images.githubusercontent.com/102837663/200258240-d21c9fde-c08b-4152-9167-b1609c0a3d08.png)

## 💡 Features
### Create a Listing
![Screen Shot 2022-11-06 at 11 25 41 PM](https://user-images.githubusercontent.com/102837663/200258343-581c46af-6103-4c01-b188-e059ef8abb83.png)
![Screen Shot 2022-11-06 at 11 26 20 PM](https://user-images.githubusercontent.com/102837663/200258370-0f281545-95fc-4eaa-9a86-da8a19a40329.png)
![Screen Shot 2022-11-06 at 11 27 30 PM](https://user-images.githubusercontent.com/102837663/200258411-87f30c98-c790-4ebb-b861-df55fee559c5.png)

### View individual Listings
![Screen Shot 2022-11-06 at 11 57 58 PM](https://user-images.githubusercontent.com/102837663/200258531-640abdcb-a382-4bc0-9f9a-87acfe6a15d7.png)

### Update and/or Delete your Listings
![Screen Shot 2022-11-07 at 12 00 14 AM](https://user-images.githubusercontent.com/102837663/200258614-ee54ba34-f78f-48a1-9f08-397a6c7bcc44.png)


### Create a Review
![Screen Shot 2022-11-07 at 12 01 50 AM](https://user-images.githubusercontent.com/102837663/200258696-cfbed8d7-5b9a-4960-b538-228575a4288a.png)

### View Reviews for specific Listings
![Screen Shot 2022-11-07 at 12 00 55 AM](https://user-images.githubusercontent.com/102837663/200258777-f00f7c38-c516-4540-90c0-067dee688e3f.png)

### Update and/or Delete your Reviews
![Screen Shot 2022-11-07 at 12 03 40 AM](https://user-images.githubusercontent.com/102837663/200258835-f9a5c710-f7cb-4390-805b-b1548a9aa13c.png)


# 🚧 To do list
1. Complete CRUD functionality for Bookings
2. Complete filter/search functionality based on location, type, and max guests
3. Complete CRUD functionality for Wishlists

# 📲 Setup locally
1. Clone this repository

   ```bash
   git clone https://github.com/MacFlyOSX/pearBnB.git
   ```

2. Install dependencies

      ```bash
      pipenv install
      cd react-app
      npm install
      ```

3. Create a **.env** file based on the example and set the environment variables for SECRET_KEY and DATABASE_URL for your
   development environment

4. Get into your pipenv, migrate your database, seed your database, run your Flask app, and start your React app

   ```bash
   pipenv shell
   flask db upgrade
   flask seed all
   flask run
   cd react-app
   npm start
   ```

**📟 Contact: [Linkedin](https://www.linkedin.com/in/brandon-tasaki/)**
