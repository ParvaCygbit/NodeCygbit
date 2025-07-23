// note JS is runtime environment for executing JS code outside of browser
// now i start note in terminal using "node" command and exit from node using ".exit" or "ctrl + d"
// now run node file using "node fname.js" for initializing note using "npm init" 
// then setup package name to node.js project and create index.js file and run using "node index.js"
// now check list of node version using this command "nvm ls" for find remote all the Node versions available "nvm ls-remote" 
// and use speific version using if avalable in system "nvm use v18.16.0"  else install using "nvm install v18.16.0"
// 
// now install Express using "npm i express" it is a web framework for node.js
// also uninstall express using "npm uninstall express"
// we can also run this index file in browser using html file to link this js file to html file
// what we are writing in nodeJs is a module and we can use this module in other js file using "import" and "export"
// there are two types of modules in node.js CommonJS and ES6 modules
// CommonJS is used by default in node.js and we can use it using "require"
// ES6 modules are used in modern JavaScript and we can use it using "import"
// --> we can also use "import" in node.js by using "type": "module" in package.json file
// --> or by using .mjs extension for the file

// there are three type of commoponents 1) filebased 2) buildIn 3) third party
// built-in modules are the modules that come with Node.js by default, such as 'fs', 'path', 'os', etc.
// third-party modules are the modules that are not part of Node.js but can be installed using npm, such as 'express', 'mongoose', 'pokemon', 'nodemon' etc.

// to run NodeJSIntro.js file we need to run "node src/NodeJS/NodeJSIntro.js" in terminal
// to run NodeJS.js file we need to run "node src/NodeJS/NodeJS.js" in terminal
// to run FSModule.js file we need to run "node src/NodeJS/Modules/FSModule.js" in terminal
// to run PathModule.js file we need to run "node src/NodeJS/Modules/PathModule.js" in terminal
// to run OSModule.js file we need to run "node src/NodeJS/Modules/OSModule.js" in terminal
// to run HTTPModule.js file we need to run "node src/NodeJS/Modules/HTTPModule.js" in terminal
// to run PokemonModule.js file we need to run "node src/NodeJS/Modules/PokemonModule.js" in terminal

// nodemon is use in terminal to run node.js file and it will automatically restart the server when we make changes in the file
// "npm install nodemon -g" // to install nodemon globally
// "nodemon src/NodeJS/Modules/PokemonModule.js" to run HTTPModule.js file using nodemon

// in http module we create server using http.createServer() method
// and we can handle different routes using if else statements


// now we deploy this server on render.com using git
// to deploy this server on render we need to create a render Web Service and then push the code to git
// we can also use Render CLI to deploy the server install Render CLI using 
// "curl -fsSL https://raw.githubusercontent.com/render-oss/cli/refs/heads/main/bin/install.sh | sh" globaly 
// ADD PATH "export PATH=$PATH:/Users/cygbitdeveloper/.local/bin" AND version using "/Users/cygbitdeveloper/.local/bin/render --version"
// now for uninstall "sudo rm ~/.local/bin/render" and run this to confirm "ls -l ~/.local/bin/render" and "render --version"
// now we run "render login" to login to render.com using CLI and it will ask for token
// You can manage and revoke CLI tokens from your account settings page at any time.
// now run "render workspace set" to set the workspace to render account details 
// now we can use "render services" to show list of services on render.com

// not working commont learn more about it
// we can also create a web service using "render services create --type web --name <service-name> --repo <repo-url> --branch <branch-name> --plan <free> --region <region> --env <env-type> --build-command <command> --start-command <command>" ask for service name, repo-url, branch-name, free, region, node, "npm install" and "npm start" 
// we can also use "render dashboard[SERVICE_ID]" to open the server in browser
// we can also use "render deploys list[SERVICE_ID]" and "render deploys list --service <service-name>" to show deploys of the service
// we can also use "render deploys create[SERVICE_ID]" to create new deploy of the service
// we can also use "render logs[SERVICE_ID]" to see the logs of the server
// we can also use "render restart[SERVICE_ID]" to restart the server 

