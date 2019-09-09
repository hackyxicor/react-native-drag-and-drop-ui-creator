const NodeParser = require("node-html-parser")
const parse = NodeParser.parse;

const root = parse('<ul id="list"><li>Hello World</li></ul>');

console.log(root.firstChild.structure);