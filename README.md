# First, to download the node_modules folder where all the dependencies are stored and to make the project works, run the following command in the VS Code terminal:
npm install
# or
yarn

# If neither npm nor yarn are working, you have to install them first:
# npm: https://docs.npmjs.com/cli/v7/configuring-npm/install
# yarn: https://yarnpkg.com/lang/en/docs/install/

# Then, to run the project, run the following command in the terminal:
npm run dev
# or
yarn dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# For every details about all the files, you can go through all of them and read the comments in the ones that I did write comments for

# I will now explain how this Next.js/React.js project is structured and how it works :

# First, the .next folder : 
# It is at the top and it is where the Next.js project is compiled but it is not necessary to actually explain what is in it,
# Because there's no actual code that you write in it and so there's no need to modify it. ( it is just created when you run the project for the first time )

# Second, the components folder :
# It is where all the components are stored ( you can read more about them here [https://upmostly.com/tutorials/what-is-a-react-component]). 
# A component is a part of the page that is reusable and that can be used in different pages. 
# For example in some websites, there is a navigation bar at the top of all the pages, so we can create a Header or a Navbar component which is used in all of those pages. 

# Here in this project, there's no actual reusable component that is used in different pages because every page is different with different forms and so on, 
# So I only created those components because it's a good practice to create a component for each form and because it's easier to read and maintain the code.

# Third, the models folder :
# It is where the models are stored ( this is for the backend part ). A model is a class ( here user.js ) that is used to represent an object in the database. 
# For example, if you have a User table in your database, you can create a User model that will represent a user in the database. 


# Third, the pages folder :
# It is where all the pages are stored. A page is a file that is used to display the content of a specific route/url. 
# Here, because I wanted to code and create content at the route/url : '/' ( which is basically the homepage or localhost:3000/ ), I created a file called index.js in the pages folder. 
# For example, If I created a file called about.js in the pages folder, it will be displayed when the user is in the route '/about' ( localhost:3000/about ).
# This is how routing works in Next.js. 

# In this pages folder, there's also the api folder. It is where all the api routes are stored, to make the connection between the frontend and the backend.
# There's also the _app.js file. It is used to initialize the app and to add global styles. It basically wraps all the pages and components and renders them.

# Fourth, the public folder :
# It is where all the public files are stored. A public file is a file that is accessible by the user.
# So usually, it is used to store images, fonts, etc. But for my project, I only used it to store the favicon.ico file. 
# The vercel.svg file is used to display the vercel logo at the top left of the tab in the browser. ( It is not necessary to have it, you can delete it if you want, it was generated automatically by Next.js )

# Fifth, the styles folder :
# It is where all the styles are stored. A style is a file that is used to add styles to a specific component or a specific page. So like css files.

# Finally, the utils folder :
# It is where all the utils are stored. A util is a file that is used to store some functions that are used in different files. It is just a good practice to store them in a separate folder like components, 
# To make the code more readable and maintainable, but it is not necessary to have it, I could have put the function in it in the file where it is used.
# Here, in this folder, there's only one file called connectDB.js. It is used to connect the app to the database, which is MongoDB in this case.

# All the other files at the bottom are just used to configure the project and to make it work. 

