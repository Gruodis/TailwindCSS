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
You can install Vite first latest guide [here](https://vitejs.dev/guide/) or install Vite&TailwindCSS guide [here](https://tailwindcss.com/docs/guides/vite#react), or follow steps below:

```bash
npm create vite@latest
```
<br/>
<br/>

#### You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + Vanilla JS project, run:

```bash
# npm 6.x
npm create vite@latest my-vue-app --template vanilla

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vanilla

# yarn
yarn create vite my-vue-app --template vanilla

# pnpm
pnpm create vite my-vue-app --template vanilla
```
<br/>
<br/>

## To use SASS & Nesting in project

#### 1 - install sass

```bash
npm install -D sass
```
<br/>
<br/>

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
  
<br/>
<br/>

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

<br/>
<br/>
<hr/>
<br/>
<br/>

### Vite2 config
1 - Install

``npm init vite@latest myAppName``

2 - Go to project dir

``cd .\myAppName\``


3 - Install additional modules

```npm install -D tailwindcss postcss autoprefixer```

4 - create tailwind.config.js & postcss.config.js

``npx tailwindcss init -p``

5 - Move project files to **_/src_** diretory then edit **_tailwind.config.js_**

```js
module.exports = {

content: ['./src/**/*.{html,js}'],
theme: {
extend: {},
},
plugins: [],
}
```

6 - Then create **_vite.config.js_** and add:
```js
export default {
root: 'src',
publicDir: 'public',
outDir: '../docs',
server: {
open: true
}
}
```
<br/>
<br/>
<hr/>
<br/>
<br/>

### VSC extensions
-  [Tailwind CSS IntelliSense Plugin](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) 
-  [Tailwind Docs](https://marketplace.visualstudio.com/items?itemName=austenc.tailwind-docs)

### TailwindCSS Playground

https://play.tailwindcss.com/

