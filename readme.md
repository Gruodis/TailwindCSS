<p align="center">
<img alt="TailwindCSS" width="150" src="https://vitejs.dev/logo.svg">
<img alt="TailwindCSS" width="150" src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg">
</p>

<br/>

<h1 align="center">Vite & TailwindCSS with PostCSS/Sass</h1>
<br/>
<br/>
<br/>

## Install Vite (v.3.2.3)
You can find latest guide here: https://vitejs.dev/guide/ or follow steps below:

```bash
npm create vite@latest
```

#### You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + Vue project, run:

```bash
# npm 6.x
npm create vite@latest my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue
```

## To use SASS & Nesting in project

#### 1 - install sass

  ```bash
  npm install -D sass
  ```
#### 2 - Nesting with TailwindCSS default plugin

  It’s included directly in the tailwindcss package itself, so to use it all you need to do is add it to your PostCSS configuration, somewhere before Tailwind:

  ```js
  // postcss.config.js
  module.exports = {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    }
  }
  ```
#### 3 - Nesting with "postcss-nesting"
  If you’d rather use postcss-nesting (which is based on the work-in-progress CSS Nesting specification), first install the plugin:

  ```bash
  npm install -D postcss-nesting
  ```
  Then pass the plugin itself as an argument to tailwindcss/nesting in your PostCSS configuration:

  ```js
  // postcss.config.js
  module.exports = {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',
      tailwindcss: {},
      autoprefixer: {},
    }
  }
  ```


// create project
1 - npm init vite@latest myAppName

// go to project dir
2 - cd .\myAppName\

// istall additional modules
3 - npm install -D tailwindcss postcss autoprefixer

// create tailwind.config.js & postcss.config.js
4 - npx tailwindcss init -p

// move project files to src diretory then edit tailwind.config.js

module.exports = {

content: ['./src/**/*.{html,js}'],
theme: {
extend: {},
},
plugins: [],
}

// then create vite.config.js and add:

export default {
root: 'src',
publicDir: 'public',
outDir: '../docs',
server: {
open: true
}
}

// extensions
Tailwind CSS IntelliSense Plugin https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss  
 Tailwind Docs https://marketplace.visualstudio.com/items?itemName=austenc.tailwind-docs

// playground

https://play.tailwindcss.com/

//END
