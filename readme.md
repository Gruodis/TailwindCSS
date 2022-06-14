#TailwindCSS with PostCSS and Autoprefixer

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
