# server-deployment-practice

### LAB: Node Ecosystem, CI, CD
- Assignment:
    - Time to get hands on with Node.js development! Today, you’ll create and deploy a web server using CI and CD and get used to the general process of building and deploying servers, and prepping your work for grading

### Pull Request

- [Lab01-PR](https://github.com/Marthaquinram/server-deployment-practice/pull/3)
- [Lab02-PR](https://github.com/Marthaquinram/server-deployment-practice/pull/7)
- [Lab03-PR](https://github.com/Marthaquinram/server-deployment-practice/pull/10)
- [Lab03-PR-Update](https://github.com/Marthaquinram/server-deployment-practice/pull/12)
- [Lab04-PR](https://github.com/Marthaquinram/server-deployment-practice/pull/15)
- [Lab04-PR-Updated](https://github.com/Marthaquinram/server-deployment-practice/pull/18)

# Links

- [Heroku-Production](https://martha-server-deploy-prod.herokuapp.com/)
- [Heroku-Dev](https://martha-server-deploy-dev.herokuapp.com/)
- [Github-Action](https://github.com/Marthaquinram/server-deployment-practice/actions/runs/2748945978)


# Starting up
- ensure you have your .env file set up
    - exapmle PORT=(enter in port number here)
- In terminal run npm i to install dependencies and then run npm test to run all test.
- In terminal run brew install sqlite3, sequalize
- Add DATABASE_URL with heroku postgres link to .env file.
- Run thunderclient and test both end routes /soccer and /bands. see models for data model on what data types to search in thunderclient.

#### Notes:
- Followed instructions and demo step by step and successfully got test to pass on local and github.
- Learned that yml is very picky about white spaces and indentation, that was causing my test to not work in github, got it fixed and it worked.
- I struggled writing the test for CRUD, I was only able to test for Create and reading the players/band but couldnt get Update and Delete to work.
- havent completed lab 04 im struggling with it, got some help from a TA and was confused even more.
- Completed Collections-class.js collaborated with Zayah. I think was close on some of the steps but i needed further help with my routes.
