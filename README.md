# Neo Plugin Template Starter Kit

Welcome to the Neo Plugin Template Starter Kit! This template provides a basic structure for building Lit web components with Webpack. Follow the steps below to get started.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later)

## Getting Started

### Step 1: Clone the Repository

First, clone the repository to your local machine:

```sh
git clone https://github.com/your-username/neo-plugin-template.git
cd neo-plugin-template
```

### Step 2: Install Dependencies

Initialise the plugin, follow the prompts to create the package.json.
```sh
npm init
```
1. Name your package
2. Define a version
3. Add a description
4. Set the entry point as neo-plugin-template.js 
5. Leave test command empty
6. Enter your git repo
7. Add any key words
8. Add you name 
9. Please use UNLICENSED

Install the necessary dependencies using npm:

```sh
npm install
```

### Step 4: Configure Contract

Refer to https://help.nintex.com/en-US/formplugins/Reference/Reference.htm

Contract is located in src/neo-plugin-template.js
There is a single example contract property which is named src

### Step 5: Build the plugin

Refer to https://help.nintex.com/en-US/formplugins/Reference/GetStartedLit.htm

Follow instructions for JavaScript
The template contains notes explaining important parts of the plugin file.
The template demonstrates consuming and using a control property in the form of message.
Then gathering a response and returning that in response.

### Step 6: Build the Project

Build the project using Webpack:
```sh
npm run build
```

### Step 7 (Optional): Start the Development Server
If you would like to host the plugin locally during development you can host it by doing the following:

Build the project using Webpack:
```sh
npm start
```

This command will start a local server at http://localhost:8080, where you can view your Lit web component.

You can enter the direct URL into the Plugins panel by using http://localhost:8080/dist/neo-plugin-template.js

With this method the plugin will only work for you on your machine. 

Please be aware this is not for production release, you can either upload the file or host it accordingly.

### Project Structure
Here's an overview of the project's structure:

```
neo-plugin-template/
├── dist/                                   # Compiled output
│   ├── neo-plugin-template.js              # Compiled file for use
│   └── neo-plugin-template.js.LICENSE.txt  # Licence for output
├── node_modules/                           # Node.js modules
├── src/                                    # Source files
│   └── neo-plugin-template.js              # Main JavaScript file
├── package.json                            # Project metadata and scripts
├── package-lock.json                       # Dependency tree lock file
├── webpack.config.js                       # Webpack configuration
└── README.md                               # This README file
```

### Available Scripts

In the project directory, you can run the following scripts:

    npm install: Installs project dependencies.
    npm run build: Builds the project for production.
    npm start: Starts the development server.

### License

This project is licensed under the UNLICENSED license.