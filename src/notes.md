# packages needed

### `yarn add` this is used to add packages in json
phospher-react :- this is for icons
react-router-dom :- this is to miantian multiple roots


##  navbar.jsx because we use it to create only components


# At the beginning in the `import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; `
there was an error `Error: Can't resolve 'react-router-dom'`
`npm install --save react-router-dom` was used to fix this, this installs the react-router-dom package

# Even the `import {ShoppingCart} from 'phosphor-react';` 
showed the same error and it was fixed by the same method as above
### this didnt work 

# react-feather was used for icons instead
this is used for fonts to install this type `yarn add react-feather `


# <Link />
this is used to link the shop text to the prefered path

# <Route />
this is used to describe the routes in pages like home page 