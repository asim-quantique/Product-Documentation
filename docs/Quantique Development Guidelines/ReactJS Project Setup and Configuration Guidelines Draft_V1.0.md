# React-JS Project Setup and Configuration Guidelines
# Introduction
This document provides standardized guidelines and best practices for setting up and configuring ReactJS projects. Following these practices ensures consistency, maintainability, and scalability across all projects.

# 1. Project Initialization
## 1.1 Creating a New Project
- Use **Create React App (CRA)** for scaffolding:
  ``` npx create-react-app <project-name> ```

- For TypeScript projects
  ``` npx create-react-app <project-name> --template typescript ```

> Note: - Avoid modifying the default CRA setup unless necessary.

## 1.2 Git Initialization
- Initialize Git repository:
  ``` git init ```
- CRA creates a .```gitignore``` file by default

## 1.3 Standard Folder Structure
Maintain the following structure for organized and scalable development:
``` /public```
  ```index.html```
  ```favicon.ico```

```src/```
```├── apis/```
```├── assets/```
```├── components/```
```├── config/```
```├── constants/```
```├── contexts/```
```├── helpers/```
```├── hooks/```
```├── json/```
```├── pages/```
```├── routes/```
```├── store/```
```├── stories/```
```├── index.js```
```└── index.scss```
## 1.4 Branching Strategy
- Use a consistent Git branching model (e.g., Use Git Flow, GitHub Flow, or Trunk-Based Development).
- Create feature branches from main or develop:
  ```git checkout -b feature/<feature-name>```
- Use Pull Requests for merging with proper code review.
# 2.	Dependency Management
## 2.1	Package Managers
- Use npm or yarn, but remain consistent across the team.
- Install dependencies:
  ```npm install```
  ```or```
  ``` yarn install```
- Before installing, always check for and use the most recent stable version of each library.
- Install only necessary dependencies, ensuring the package.json file is updated with each addition.
## 2.2	Essential Dependencies
- React ecosystem: Included with CRA
- Routing:
  ``` npm install react-router-dom ```

- State management (if required): Use Redux or Context API
  ``` npm install @reduxjs/toolkit react-redux ```

- Form handling and validation:
  ``` npm install react-hook-form quantique-field-validator ```
- API Requests:
  ``` npm install axios ```
# 3.	Coding Standards and Best Practices
## 3.1	Code Quality
- Avoid hardcoded static text, fetch from APIs or databases when possible.
- Remove all ```console.log``` statements before committing code.
- Follow Airbnb JavaScript Style Guide using ESLint and Prettier.
- Install tools:
```bash npm install @babel/eslint-parser @babel/plugin-proposal-optional-chaining @babel/preset-react eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks --save-dev```

- Enable Prettier to format code on save.
- Example.```prettierrc``` config:

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": true
}
```
- Use modern ES6+ syntax (```const```, ```let```, arrow functions, ```async/await```).
- Keep formatting consistent with Prettier and enforce rules via ESLint.
- Use clear, self-explanatory variable and function names.
- Avoid deep prop drilling use Context API or state management tools like Redux.
- Add a comment above each logical function explaining its purpose.
## 3.2	Component Structure
- Use **functional components** with React hooks (useState, useEffect, etc.).
- Use **PascalCase** for component file names (e.g., UserProfile.js).
- Validate props using **PropTypes** or **TypeScript**.
## 3.2	Component Structure
- Use **functional components** with React hooks (useState, useEffect, etc.).
- Use **PascalCase** for component file names (e.g., UserProfile.js).
- Validate props using **PropTypes** or **TypeScript**.
>Note: - Separate HTML (UI) and JavaScript (logic) into different files to keep the codebase clean and manageable. This helps avoid clutter in a single file and makes it easier to locate and update specific logic or UI code.

   >For example: Use Logic.js to store logic and import it into index.js for rendering the UI.
```jsx
import React from 'react';

import CustomListPageComponent from '../../../../components/CustomListPageComponent';
import useLogic from './Logic';

import './TestPage.scss';

const TestPage = () => {
  const {
    onclickAction,
    pagination,
    handelSearchText,
  } = useLogic();

  return (
    <>
      <CustomListPageComponent
        isTabRequire
        totalPages={pagination?.totalPages || 0}
        totalData={pagination?.total || 0}
        tableTitle="Test Table"
        ...
      />
    </>
  );
};

export default TestPage;
```
## 3.3 Naming Conventions
| Type          | Convention  | Example            |
| :------------ | :---------- | :----------------- |
| Components    | PascalCase  | `LoginForm.js`     |
| Variables/Funcs | camelCase   | `handleSubmit()`   |
| Constants     | UPPER_SNAKE | `MAX_RETRIES`      |
| Stylesheets   | module.scss | `form.module.scss` |

# 4.	State Management
## 4.1	Choosing a Strategy
- Use **React Context API** for simple applications.
- Use **Redux Toolkit** for complex state management:
```npm install @reduxjs/toolkit react-redux```
   Set up a store.js file for central state management.
## 4.2	Redux Toolkit Example
```js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchDataFailure: (state) => {
      state.loading = false;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;
export default dataSlice.reducer;
```
# 5.	Routing Configuration
## 5.1	React Router Setup
- Install react-router-dom:
```npm install react-router-dom```
- Create a routes.js or routes.tsx:
```javascript
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </Router>
);

export default Routes;
```
## 5.2	Folder structure
```plaintext```
```RouteCategories/```
```├── index.js```
```├── PrivateRoutes.js```
```├── PrivateRoutes.scss```
```├── routes.js```
```└── ScrollToTop.js```
## 5.3	Snippet example
### 1.	RouteCategories > MasterRoutes
```javascript
import { 
  AddMake,
  MakeList,
} from '../Components/MasterComponents';
import { ROUTES } from '../routes';

export const MasterRoutes = [
  {
    path: ROUTES.makeList,
    element: <MakeList />,
  },
  {
    path: ROUTES.addMake,
    element: <AddMake />,
  },
];
```
### 2.	Components > MasterComponents
```javascript
import { lazy } from 'react';

export const MakeList = lazy(() => import('../../pages/Master/Make/MakeList/index'));
export const AddMake = lazy(() => import('../../pages/Master/Make/AddMake/index'));
```
### 3.	index.js JavaScript
```javascript
/* eslint-disable no-nested-ternary */ 
import React, { Suspense } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';

import { ROUTES } from './routes';
import PrivateRoutes from './PrivateRoutes';
import ScrollToTop from './ScrollToTop';

import { Home } from './Components/OtherComponents';
import { getLoginRoutes } from './RouteCategories/LoginRoutes';
import { MasterRoutes } from './RouteCategories/MasterRoutes';

const RouteComponent = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop setAuthState={setAuthState} />
        <Routes>
          {/* Auth routes */}
          {getLoginRoutes(authState).map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

          {/* Protected routes */}
          <Route
            element={(
              <PrivateRoutes
                isAuthenticated={authState.isAuthenticated}
                isMfaComplete={authState.isMfaComplete}
                lptData={authState.lptData}
              />
            )}
          >
            <Route index path={ROUTES.home} element={<Home />} /> 
            {MasterRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>

          {/* Catch-all route */}
          <Route
            path="*"
            element={(
              <Navigate
                to={authState.isAuthenticated ? ROUTES.home : ROUTES.login}
                replace
              />
            )}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouteComponent;
```
### 4.	routes.js JavaScript
```javascript
export const ROUTES = { 
  home: '/',
  login: '/login',
  makeList: '/make-list',
  addMake: '/add-make',
};
```
# 6.	Environment Configuration
## 6.1	Environment Variables
_ Use a .env file for configuration:
```REACT_APP_API_URL=https://api.example.com```
```REACT_APP_APP_MODE=development```
- Never commit.```env``` to version control.
# 7.	Testing
## 7.1	Unit and Integration Tests
- Use Jest and React Testing Library for unit and integration:
- Install:
  ```npm install --save-dev jest @testing-library/react @testing-library/jest-dom```
- Sample test in__tests__/HomePage.test.js:
- Example test:
```javascript
import { render, screen } from '@testing-library/react'; 
import HomePage from './HomePage';

test('renders home page heading', () => {
  render(<HomePage />);
  const heading = screen.getByText(/home page/i);
  expect(heading).toBeInTheDocument();
});
``` 
# 8.	Styling
- Use CSS Modules, TailwindCSS, Styled Components, Emotion, or Bootstrap.
- CSonsistent design systems or libraries (e.g., MUI,).
- Avoid inline styles for maintainability.
# 9.	Responsive Design
- As a front-end developer, make sure your application or portal works well on all screen sizes and devices.
# 10.	Security
- Avoid storing sensitive data in localStorage/sessionStorage.
- If using localStorage:
- Encrypt the data.
- Clear on logout.
- Implement expiry and auto-logout.

# 11.	Deployment
## 11.1	Building and Deploying
- Create a production build:
  ```npm run build```
- Deploy using Netlify, Vercel, or cloud platforms (AWS, Azure, etc).
- Ensure the environment variables are correctly set.
# Conclusion
Following these guidelines ensures consistent project setup, efficient collaboration, and long-term maintainability of ReactJS applications. For clarification or support, contact your team lead or designated project architect.
