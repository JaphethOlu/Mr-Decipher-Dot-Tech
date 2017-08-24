const cleanCSS = require("clean-css");
const input = "./src/production/css/styles.css";
const output = new cleanCSS().minify(input);
const chalk = require("chalk");
const fs = require("fs");

fs.writeFile("./src/production/css/styles.min.css", output, (err) => {
    if(err) {
        console.log(chalk.red(err))
    } else {
        console.log(chalk.green("CSS has been successflly compressed"))
    }
});