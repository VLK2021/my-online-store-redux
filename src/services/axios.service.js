import axios from 'axios';

import baseURL from "../constans/base.url";

export const AxiosService = axios.create({
    baseURL,
})



//{
//  "name": "my-online-store-redux",
//  "version": "0.1.0",
//  "private": true,
//  "dependencies": {
//    "@material-ui/core": "^4.12.4",
//    "@reduxjs/toolkit": "^1.8.1",
//    "@testing-library/jest-dom": "^5.16.4",
//    "@testing-library/react": "^13.2.0",
//    "@testing-library/user-event": "^13.5.0",
//    "axios": "^0.27.2",
//    "react": "^18.2.0",
//    "react-bootstrap": "^2.4.0",
//    "react-dom": "^18.1.0",
//    "react-hook-form": "^7.31.2",
//    "react-icons": "^4.4.0",
//    "react-redux": "^8.0.1",
//    "react-router-dom": "^6.3.0",
//    "react-scripts": "5.0.1",
//    "web-vitals": "^2.1.4"
//  },
//  "scripts": {
//    "start": "react-scripts start",
//    "build": "react-scripts build",
//    "test": "react-scripts test",
//    "eject": "react-scripts eject"
//  },
//  "eslintConfig": {
//    "extends": [
//      "react-app",
//      "react-app/jest"
//    ]
//  },
//  "browserslist": {
//    "production": [
//      ">0.2%",
//      "not dead",
//      "not op_mini all"
//    ],
//    "development": [
//      "last 1 chrome version",
//      "last 1 firefox version",
//      "last 1 safari version"
//    ]
//  }
//}