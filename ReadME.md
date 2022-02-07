# MightyJaxx

### Project Name: Mighty Jaxx Submission

### By Alex Koh

Full-stack CRUD application with Sign In/Sign Up Authentication

Libraries used: Tailwind CSS

### By Alex Koh

### Feedback and Advice from Interview

### User Experience and Becoming a Better Junior Frontend Programmer

Think about the product you're creating and how the user is going to interact with it. Think of all the potential user flows and how you might want to enhance that experience.

#### For example, with the Sign Up/ Sign In page

- Disable the button if the user has not entered all fields
- Have validators in the frontend AND the backend for emails, password (increase security by requiring special characters). There are libraries (Express Validator) for this and Regex is a viable but not really an easy solution
- Your validations can be either in the backend or the frontend. You can do both to try to catch it at two points or either end depending on the user experience
- Use try-catch statements to help your app gracefully handle errors (instead of just crashing)

#### On how to be a better engineer

- Think about the day-to-day job as a junior dev - you're helping to create buttons, forms, display data. Think about doing small projects that allow you to practice these things. Go into detail, think about all the potential "flaws" and "bugs" and protect against them with code (e.g. the signin validators)
- Advice from watchTowr that matches this - think about scaling down your projects on focusing on small things that enhance your toolkit. How to create great forms, buttons, displaying data. This is because your large apps are good but you'll run into debugging obstacles a lot that eat up your time.

- Think about your unique selling point - Rob's was his experience working with great Revolut engineers who kept the consumer/user in mind. They placed the user first and that guided them to create great apps. They were not necessarily algo experts. But their USP was that they could create apps that users enjoyed
- There are always going to be tradeoffs. Think about what you need to prioritise first
- Remember what you traded your time in order to get features out. Is this the most important?
- Learn the basics and core concepts of CSS (padding, margin, relative position, absolute position)
- inline styling is ok... but when you're working in a large team it's not great
- consider react-bootstrap. Material UI is similar

#### Working in a team and shipping products - how to be more professional

- Get rid of all console.logs before you ship things out to "production"
- Gracefully handling errors is important - the frontend needs to have a response
- Make sure your documentation is comprehensive - your app needs to run on other people's computer! You're working in a team that has different environments and OS. You need to make sure that your documentation is good - especially in how to get the app up and running.

Examples below:

- I need to make sure it can be run in other computers - I had changed the scripts to start the app: ( "start": "server", "dev": "nodemon server" )
- Docker can be used but it's overkill. Just be more careful with the documentation
- Your instructions need to be exact. You need to be very clear in how to get the app up and running For example, open the folder in VSCode. Cd into backend. npm i, npm run dev.

### Dependencies:

Frontend:

- Reduxjs/toolkit
- Axios
- React-redux
- React-router-Dom
- Redux
- TailwindCSS

Backend:

- Bcrypt
- Cookie-parser
- Cors
- dotenv
- Express
- Express-router
- Mongoose
- Nodemon

## App Functions:

The purpose of this code challenge is to build an admin dashboard with authentication protection and the ability to add new products.

The following requirements were met:

#### Login Page

- Text inputs for email and password ✔️ --> make sure it has to be an "email" type
- Submit button ✔️
- Error message for incorrect credentials ✔️
- Mobile and desktop device responsive ❌
- Redirect to the admin dashboard page for correct credentials ✔️

#### Admin Dashboard Page

- Show a list of products (fetched from a database). Each product to include SKU, title, and image ✔️
- Add new product (to be added to database too) ✔️
- Edit existing product (edited in database too) ✔️
- Remove an existing product (removed in database too) ✔️
- Logout button that redirects to login page ✔️ (note: I have added a feature where the user is first direct to a thank you/signout page, then after 3 seconds will be redirected to signin)
- Make the page responsive for mobile and devices ❌

## Project Screen Shot(s)

### 1. EntryPage

![EntryPage](https://imgur.com/8adqQy0.jpg)

### 2. SignUp Page

![Signup](https://imgur.com/HLugcgP.jpg)

### 3. SignIn Page (with Error Message)

![SignIn](https://imgur.com/tiLToUl.jpg)

### 4. Dashboard Page

![SignIn](https://imgur.com/xg9ORnJ.jpg)

### 5. Add Items Page

![SignIn](https://imgur.com/G51Gsh4.jpg)

### 6. Dashboard with New Item

![SignIn](https://imgur.com/aFctOKol.jpg)

### 7. Edit Item Page (User can enter this page by clicking on the item in the dashboard)

![SignIn](https://imgur.com/6GZp72d.jpg)

### 7. SignOut Page (Users will be redirect to Signin in 3 seconds after clicking on signout)

![SignIn](https://imgur.com/QvvRl3C.jpg)
