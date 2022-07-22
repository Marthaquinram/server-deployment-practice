# server-deployment-practice

### LAB: Node Ecosystem, CI, CD
- Assignment:
    - Time to get hands on with Node.js development! Today, you’ll create and deploy a web server using CI and CD and get used to the general process of building and deploying servers, and prepping your work for grading

### Pull Request

- [Lab01-PR](https://github.com/Marthaquinram/server-deployment-practice/pull/3)
- [Lab02-PR](https://github.com/Marthaquinram/server-deployment-practice/pull/7)
- [Lab03-PR](https://github.com/Marthaquinram/server-deployment-practice/pull/10)
- [Lab03-PR-Update](https://github.com/Marthaquinram/server-deployment-practice/pull/12)

# Links

- [Heroku-Production](https://martha-server-deploy-prod.herokuapp.com/)
- [Heroku-Dev](https://martha-server-deploy-dev.herokuapp.com/)
- [Github-Action](https://github.com/Marthaquinram/server-deployment-practice/actions/runs/2720874734)


# Starting up
- ensure you have your .env file set up
    - exapmle PORT=(enter in port number here)
- In terminal run npm i to install dependencies and then run npm test to run all test.
- In terminal run brew install sqlite3, sequalize
- Add DATABASE_URL with heroku postgres link to .env file.

#### Notes:
- Followed instructions and demo step by step and successfully got test to pass on local and github.
- Learned that yml is very picky about white spaces and indentation, that was causing my test to not work in github, got it fixed and it worked.
- I struggled writing the test for CRUD, I was only able to test for Create and reading the players/band but couldnt get Update and Delete to work.
