# musiclist
// Install / update express-generator globally
yarn global add express-generator

// Run express on musiclist
cd.. // since I'm within musiclist
express -v ejs -f musiclist
cd .\musiclist\ // enter the musiclist folder
yarn

// Run server
yarn start
// Navigate to localhost:3000; This runs a script in ./bin/www;

// Create separate git branch
git branch develop
// list branches - *asterisk is active
git branch
// switch active branch
git checkout develop
// push new branch upstream (ie saves branch) to github; origin is a autogenerate url for the repo (ie shortcut);
git push -u origin develop
// run as many commits you logically want with appropriate messages; at the end of the day, push your changes to github;

// run "yarn" any time to add any new packages in package.json to the project; it won't redownload or effect any existing packages;

// setup passport

// test with user (not recommended for production due security flaw - ie unencrypted password)
/// open mongo via cmd
mongo
/// switch to musiclist
use musiclist
/// create user
db.users.insert({ "username": "someone", "password": "unencrypted pass", "firstName": "who", "lastName": "ami", "email":"woot@u.com" });
/// find and display users
db.users.find().pretty();

// mongoose model is automatically connected to its plural (ie house model to houses); This can be overridden;
