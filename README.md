![](http://blog.inovia-conseil.fr/wp-content/uploads/2016/01/logo-react.png)

# code**Boot**

**codeboot** is a browser-based development environment aimed at **novice programmers**. It offers a _progressif_ and _adaptive_ interface dedicated to _teachers_ in need of a **simple-to-use** online tool.

### Some features:

- No installation needed
- Can run locally without an internet connection
- A **Console** for interactive experimentation and debugging
- A **Code Editor** and persistent integrated file system
- Single-step mode with step counter
- Code highlighting for stepping and error messages
- A "novice" setting that restricts the language for pedagogical reasons
- Scripts can be saved to short URLs (useful for embedding executable code samples in web pages and PDF documents)

### Link to application

[**www.codeboot.org**](http://www.codeboot.org)

# Development

## Prerequisite

**NodeJs** must be installed on the targeted machine.

## Installation

Simply run the following command in
a terminal (at the root of the project).

> npm install

## Building

To build, run the following command in
a terminal (at the root of the project).

> npm run build

The application will built and outputed in the following directory :

> \_\_root\_\_ / build /

## Structure

```
[.]
├── .vscode/             # VSCode goodies
├── build/               # Output folder
├── config/              # Webpack configuration
├── docs/                # Documentation
├── node_modules/        # NodeJs modules
├── src/                 # Source code
├── public/              # www
├── /tools               # Node scripts
├── package.json         # Node packages
├── README.md            # You are reading it
└── _.code-workspace     # VSCode workplace
```

## Documentation

For further documentation on how to develop this application, take a look at the following directory :

> \_\_root\_\_ / docs /
