# Task Tracker

A simple React application to help you manage your daily tasks. You can add, view, and delete tasks, as well as toggle reminders. The app also features an About page and a clean, modern UI.

## Features
- Add new tasks with details
- Delete tasks
- Toggle reminders for tasks
- View all tasks in a list
- About page with project info

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Task-Trackers
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000).

## Project Structure
```
Task-Trackers/
  ├── public/
  ├── src/
  │   ├── Components/
  │   │   ├── About.js
  │   │   ├── AddTask.js
  │   │   ├── Button.js
  │   │   ├── Footer.js
  │   │   ├── Header.js
  │   │   ├── Task.js
  │   │   └── Tasks.js
  │   ├── App.js
  │   └── index.js
  ├── db.json (for mock backend)
  └── ...
```

## Tech Stack
- React
- JavaScript (ES6+)
- CSS
- [json-server](https://github.com/typicode/json-server) for mock backend (db.json)

## Available Scripts
- `npm start` — Run the app in development mode
- `npm test` — Launch the test runner
- `npm run build` — Build the app for production

## License
This project is open source and available under the [MIT License](LICENSE).

---

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*
