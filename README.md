# server-deployment-practice

### LAB: Node Ecosystem, CI, CD
- Assignment:
    - Time to get hands on with Node.js development! Today, you’ll create and deploy a web server using CI and CD and get used to the general process of building and deploying servers, and prepping your work for grading

### Pull Request

- [Lab01-PR](https://github.com/Marthaquinram/server-deployment-practice/pull/3)
- [Lab02-PR](https://github.com/Marthaquinram/server-deployment-practice/pull/7)
- [Lab03-PR](https://github.com/Marthaquinram/server-deployment-practice/pull/10)

# Links

- [Heroku-Production](https://martha-server-deploy-prod.herokuapp.com/)
- [Heroku-Dev](https://martha-server-deploy-dev.herokuapp.com/)
- [Github-Action](https://github.com/Marthaquinram/server-deployment-practice/actions)
<!-- actions tab for most recent push says my test failed but it says "Cannot log after tests are done. Did you forget to wait for something async in your test?" need to troubleshoot  -->

# Starting up
- ensure you have your .env file set up
    - exapmle PORT=(enter in port number here)
- In terminal run npm i to install dependencies and then run npm test to run all test.
- In terminal run brew install sqlite3, sequalize
- Add DATABASE_URL with heroku postgres link to .env file.

#### Notes:
- Followed instructions and demo step by step and successfully got test to pass on local and github.
- Learned that yml is very picky about white spaces and indentation, that was causing my test to not work in github, got it fixed and it worked.
