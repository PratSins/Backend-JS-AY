
Creating an Express Server
  1. Create directory.
  2. Create index.js file.
  3. Initialize NPM.
  4. Install the Express package.
  5. Write Server application in index.js.
  6. Start server.

1.  npm init -y
      or
    npm init
2.  npm i express
3. Add this in package.json after the main parameter
    "type": "module",

4. node index.js
        ( <your_app>.js )

5. ctrl + c to exit in terminal

NODEMON
      nodemon is a tool that helps develop Node.js based applications by automatically restarting the
      node application when file changes in the directory are detected. 

      npm i -g nodemon 

      <-g> is for global install

      nodemon index.js
            ( <your_app>.js )
      

      If u see error nodemon.ps1 then do this
        1. Open Windows PowerShell with Run as Administrator
        2. Run this command: Set-ExecutionPolicy Unrestricted







