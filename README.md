# creating-micro-frontend
It is about how you can create a micro frontends architecture

https://ripple-germanium-130.notion.site/Micro-front-end-164ec7f773e245aca6cb268853f39e0e

# Micro front-end

Done: Yes
Tags: Documentation, Subject matter
Task: No

# Tutorial

## Creating a root

```jsx
npx create-single-spa --moduleType root-config
```

## Creating the first micro front-end

```jsx
npx create-single-spa
```

![Untitled](Micro%20fron%201f046/Untitled.png)

1. Go to your **root** project and import your new micro front-end in a `index.ejs`
    1. At this moment we will import in a local importation. (red underline)
    2. If you selected a react framework to micro front-end, you will need import the react and react-dom. (yellow underlined)

![Untitled](Micro%20fron%201f046/Untitled%201.png)

1. After go to your `eduardoacdiogo-root-config-js`  and register your new micro front-end

![Untitled](Micro%20fron%201f046/Untitled%202.png)

OBS: Look now we changed a `activeWhen` to a function, because how was before, it was concatenating the projects.

## Creating a micro front-end with intern routes

```jsx
npx create-single-spa
```

![Untitled](Micro%20fron%201f046/Untitled%203.png)

1. Add the new micro front-end to our **root** following the same steps from [the first micro front-en](https://www.notion.so/Micro-front-end-164ec7f773e245aca6cb268853f39e0e)d

![Untitled](Micro%20fron%201f046/Untitled%204.png)

OBS: But now the `activeWhen` back to be a array

1. Add to the second micro front-end the react-router-dom
    
    ```jsx
    yarn add react-router-dom
    ```
    
    1. Create your routes in your micro front-end

## Creating a micro front-end who call another micro front-end

1. Create a micro front-end
    
    ```jsx
    npx create-single-spa
    ```
    

![Untitled](Micro%20fron%201f046/Untitled%205.png)

1. Add the new micro front-end to our **root** following the same steps from [the first micro front-en](https://www.notion.so/Micro-front-end-164ec7f773e245aca6cb268853f39e0e)d

1. Create another micro front-end
    
    ```jsx
    npx create-single-spa
    ```
    

![Untitled](Micro%20fron%201f046/Untitled%206.png)

1. Add the new micro front-end to our **root** following the same steps from [the first micro front-en](https://www.notion.so/Micro-front-end-164ec7f773e245aca6cb268853f39e0e)d
    
    OBS: But now we won’t add a new register application in a `#-root-config.js`, we will just change a route from react-parcel to react-route, because the project react-parcel won’t call from **root**, it will call from the **react-route**
    
2. Now you can import your micro front-end in another like the image bellow will show

![Untitled](Micro%20fron%201f046/Untitled%207.png)

![Untitled](Micro%20fron%201f046/Untitled%208.png)

1. And to change information you could create events

![Untitled](Micro%20fron%201f046/Untitled%209.png)

![Untitled](Micro%20fron%201f046/Untitled%2010.png)

## Creating modules to share with micro front-ends

1. Creating the module

```jsx
npx create-single-spa
```

![Untitled](Micro%20fron%201f046/Untitled%2011.png)

1. Add the new micro front-end to our **root** following the same steps from [the first micro front-en](https://www.notion.so/Micro-front-end-164ec7f773e245aca6cb268853f39e0e)d
    
    OBS: But now we won’t add a new register application in a `#-root-config.js`, because it isn`t a application.
    
2. In the modules you can create a functions to export

![Untitled](Micro%20fron%201f046/Untitled%2012.png)

![Untitled](Micro%20fron%201f046/Untitled%2013.png)

1. Now you can call the function from applications

![Untitled](Micro%20fron%201f046/Untitled%2014.png)

![Untitled](Micro%20fron%201f046/Untitled%2015.png)

## Creating a lazy load

1. Creating your application

```jsx
npx create-single-spa
```

![Untitled](Micro%20fron%201f046/Untitled%2016.png)

1. Add the new micro front-end to our **root** following the same steps from [](https://www.notion.so/Micro-front-end-164ec7f773e245aca6cb268853f39e0e)[the front-end with intern routes](https://www.notion.so/Micro-front-end-164ec7f773e245aca6cb268853f39e0e)
