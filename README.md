# Random Quote Generator - Codex Checkpoint Project

A React checkpoint project for the Codex.io React course. 

A simple React application that generates random quotes from a local collection. This project demonstrates fundamental React concepts including state management, component rendering, and working with local data.

## Project Overview

The Random Quote Generator allows users to:
- View inspirational quotes with their authors
- Generate new random quotes with a click of a button
- Experience a clean and responsive user interface

## Technologies Used

- React.js
- JavaScript (ES6+)
- CSS3
- Local JSON data

## Key Features

- Dynamic quote generation from local data
- Clean and responsive design
- Fast and reliable quote generation
- No external API dependencies

## Setup Instructions

1. Clone the repository:
```bash
git clone Quote_generator_react_app
cd Quote_generator_react_app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```


## Project Structure

```
Quote_generator_react_app/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── ...
├── public/
│   └── quotes.js    # Contains quote collection
└── README.md
```

## Data Structure

The quotes are stored in `public/quotes.js` with the following format:
```javascript
export const Quotes = [
  {
    quote: "Your quote text here",
    author: "Author name"
  },
  // ... more quotes
];
```

## Learning Objectives Achieved

- Implemented React components and state management
- Worked with local data structures
- Created dynamic user interface elements
- Applied CSS styling for a responsive design
- Practiced JavaScript ES6+ features

## Future Improvements

- Add quote categories
- Implement quote search functionality
- Add favorite quotes feature
- Include share functionality
- Add dark/light theme toggle

## Author

Shivaji Chaulagain
