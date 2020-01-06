module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb-base",
  "plugins": [
    "react"
  ],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {   
    "react/jsx-uses-react": "error",   
    "react/jsx-uses-vars": "error" 
  }
};