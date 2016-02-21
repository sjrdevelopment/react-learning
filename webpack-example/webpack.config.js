 var path = require('path');

// module.exports = {
//     entry: './es6/main.js',
//     output: {
//         path: __dirname,
//         filename: "bundle.js"
//     },
//     module: {
//        loaders: [
//           {
//             test: /\.scss$/,
//             loaders: ["style", "css", "sass"]
//           },

//           {
//             test: path.join(__dirname, 'es6'),
//             loader: 'babel-loader'
//           }
//         ]
//     }
// };

module.exports = {
    entry  : './es6/main.js',
    output : {
        path     : __dirname,
        filename : 'bundle.js'
    },
    module : {
        loaders: [ 
            {
               test: /\.scss$/,
               loaders: ["style", "css", "sass"]
            },

            { 
                test   : /.js$/,
                loader : 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
