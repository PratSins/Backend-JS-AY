To check node version
    node -v

the following needs to be added to package.json at the top, inside the first {}, to use import keyword in Node
    <    "type": "module",    >
For example (notice the 2nd line) - 
{
  "type": "module",
  "dependencies": {
    "sillyname": "^0.1.0",
    "superheroes": "^3.0.0"
  }
}



