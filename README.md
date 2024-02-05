- on the dashboard where users can add items, edit, update, and delete them using checkboxes, you can include descriptive text or labels.

- Adding Items:
  "Add a new item to the list by clicking the 'Add Item' button."
- Editing and Updating:
  "To edit an item, select the checkbox next to it. Once selected, you can update the details of the item."
- Deleting:
  "To delete an item, select the checkbox next to it. After selecting, click the 'Delete' button to remove the item from the list."

* install vs code
* install node js
* set path in environment for node js
* C:\Users\user\AppData\Roaming --add npm file
* npx create-app todoapp-redux
  C:\React> cd todoapp-redux
  C:\React\my-project - npm start

* change default brower - go to default app and add google chrome

Create the new application
npx create-react-app my-project

- Create components
- Install the required packages
  npm install bootstrap
  npm install react-router-dom
  React Redux
  npm i redux react-redux redux-thunk axios
  npm install -g json-server
  json-server --watch src/Data/db.json --port 8000

- git
  git add .
  git commit -m "project"
  git push
  git pull
  git branch <branchname>
  git switch <branchname>
  git config --global user.name "Name"
  git config --global user.email "your@email.com"

Jest

- npm install --save-dev jest @testing-library/react @testing-library/jest-dom
- npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer
- we need to create a setupTest.js file in the src folder
  import { configure } from "enzyme";
  import Adapter from "enzyme-adapter-react-16";
  configure({ adapter: new Adapter() });
