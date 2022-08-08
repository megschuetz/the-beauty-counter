![TheBeautyCounter](https://user-images.githubusercontent.com/98415017/182946888-4a786015-61ff-4e70-8f3d-cf77c989bf5e.png)


## Table of Contents

- [Abstract](#abstract)
- [Deployed Link](#deployed-link)
- [Illustrations](#illustrations)
- [Technologies Used](#technologies-used)
- [Application](#application-wireframe)
- [Reflections](#reflections)
- [Future Features](#future-features)
- [Application Set-Up](#application-set-up)
- [Project Specs](#project-specs)

## Abstract

- TheBeautyCounter is a makeup site look alike based off of many real cosmetic brand sites. The homepage displays an assortment of cosmetics from five different brands via an API of one big cosmetic items collection. The user can then select a type of cosmetic category and see only items of that type. 

## Deployed Link

- [Deploy Link](https://the-beauty-counter.herokuapp.com/) 

## Illustrations

![Screen Shot 2022-08-07 at 7 29 01 PM](https://user-images.githubusercontent.com/98415017/183321242-bb9a00e2-9ff3-48a5-a3d9-1d55748d1ad7.png)

![Screen Shot 2022-08-07 at 7 28 29 PM](https://user-images.githubusercontent.com/98415017/183321208-2b2f22e9-1bf2-4fd2-8028-ecc0ef95cf81.png)


https://user-images.githubusercontent.com/98415017/183320909-666bf756-bbf5-46fa-9ab9-0bd8a0feaf77.mp4

## Application Wireframe 

![wireframe](https://user-images.githubusercontent.com/98415017/182947417-804c7b90-c272-4821-bd3e-e4815fc1ef18.png)

## Technologies Used

- JavaScript ES6
- HTMl
- CSS
- React.js
- React Router
- PropTypes
- Cypress
- Fetch API
- Postman
- NPM - react-loading

## Reflections

- A huge win was completing this project in 4 short days! I was able to create reusable react components and implement router to accomplish a multi-vew effect utilizing the changing URL. I easily understand how props are passed between react compnents and used hooks for this first time over class components to store state. Another win in this project was adding some CSS effects to give the page a girly fun feel. Over to the challenges of this project, one included manipulating the API to get only select brand items from data containing over 1000 makeup items which took too long to load, even just 5 brands takes a few seconds to load, so for the sake of this project I simply practiced implementing a fun loading page! Another challenge for this project was making the page dynamic, the body including the items is dynamic using grid CSS but the header section containing the title and type button is not yet dynamic after trying some manipulation with width, unseccessfully due to time alloted. 

## Future Features

- Add a 'hearting' feature to save like items for later.

- Make header responsive for mobile. 

- Make each item clickable to another view of all details about that product.

## Application Set-Up

1. Fork repository on GitHub.

2. `Git clone` the repository to your local machine.

4. `Cd` into the directory.

5. Run `npm install` in your terminal to install project dependencies.

6. Run `npm start` in the terminal to see the application. 

7. Run `npx cypress open` in the terminal  to run cypress tests. 

8. When finished with the application, type `Control + C` in the terminal to stop running the application. 

## Project Specs

- The specs for this application can be found 
[here](https://frontend.turing.edu/projects/module-3/showcase.html)
