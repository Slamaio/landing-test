Okay, I can add this information to the README file. Here is a possible README file with the recommended extensions:

# Landing Test

This is a landing page project built with Vue 3, Vite, Pinia and Vue Router. It uses webfontloader to load custom fonts and @iconify/vue to display icons. It also has TypeScript support and linting and formatting tools.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

The following VSCode extensions are also recommended for this project:

- [browserslist](https://marketplace.visualstudio.com/items?itemName=webben.browserslist): An extension that provides syntax highlighting and validation for browserslist files.
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): An extension that helps maintain consistent coding styles across different editors and IDEs by using EditorConfig files.
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): An extension that integrates ESLint into VSCode and provides linting feedback and auto-fixing capabilities.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): An extension that integrates Prettier into VSCode and provides code formatting on save or on demand.

## Installation

To install the project, you need to have Node.js and npm installed on your machine. Then, clone this repository and run the following command in the project directory:

```bash
npm install
```

This will install all the dependencies listed in the package.json file.

## Development

To run the project in development mode, use the following command:

```bash
npm run dev
```

This will start a local server on port 3000 with hot reload enabled.

## Build

To build the project for production, use the following command:

```bash
npm run build
```

This will create a dist folder with the optimized and minified files for deployment.

## Deployment

To deploy the project to GitHub Pages, use the following commands:

```bash
npm run predeploy
npm run deploy
```

This will push the contents of the dist folder to the gh-pages branch of your repository. Make sure you have set up GitHub Pages for your repository before deploying.

## Preview

To preview the built project locally, use the following command:

```bash
npm run preview
```

This will start a local server on port 5000 with the built files.

## Type Check

To check the TypeScript types in your project, use the following command:

```bash
npm run type-check
```

This will run vue-tsc and report any type errors.

## Lint

To lint your project files, use the following command:

```bash
npm run lint
```

This will run eslint and fix any linting errors.

## Format

To format your project files, use the following command:

```bash
npm run format
```

This will run prettier and format your files according to the rules specified in .prettierrc file.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/) for more options and details.
