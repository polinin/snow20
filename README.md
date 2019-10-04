# italy
To publish Github Pages:

Comment /dist in .gitignore file;
IMPORTANT!! Before you run the next command make sure you don’t commit the .gitignore and vue.config.js.
Run the command: git add dist && git commit -m "Initial dist subtree commit"
Run the command: git subtree push --prefix dist origin gh-pages

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
