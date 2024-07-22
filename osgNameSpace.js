//import pkg from 'json-loader!../package.json';
import pkg from './package.js';

export default {
    name: pkg.name,
    version: pkg.version,
    author: pkg.author
};
