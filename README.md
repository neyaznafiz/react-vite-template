# React - Vite with SASS Template

To use this template `create a new repository` using this template by clicking the `use this template` button on the top right corner of this repository

Clone the new repository that you just created in your local matching

Open your terminal and go to the right path of this file

Run `yarn install` or `npm install` 

## Live SCSS Compilation (VS Code Extension)

For new machine Add following code on VS Code's `settings.json` file if not included already:

```json
"liveSassCompile.settings.generateMap": false,
"liveSassCompile.settings.showOutputWindow": true,
"liveSassCompile.settings.autoprefix": ["> 1%", "last 2 versions"],
"liveSassCompile.settings.formats": [
  {
    "format": "expanded",
    "extensionName": ".css",
    "savePath": "~/../css"
  }
],
```

Run `yarn dev` or `npm run dev` to run this project.
