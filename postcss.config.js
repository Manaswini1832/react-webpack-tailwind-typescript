const tailwindcss = require('tailwindcss');
let environment = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
    ],
};

module.exports = environment;