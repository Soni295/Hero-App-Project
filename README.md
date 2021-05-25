# Hero App Project

### first clone the repository  

```bash
$ git clone https://github.com/Soni295/Hero-App-Project.git
$ cd App-Hero-Project
```
### then you have to insert your token which you can get here https://superheroapi.com/
### next copy execute this command change \<Your token> for your token.

```bash
$ echo "export const token = '<Your token>'" > ./src/config/token.js
```
### for example if my token is "1234", i have to execute this command.

```bash
$ echo "export const token = '1234'" > ./src/config/token.js
```

### finally execute the next command for install all dependencis and start the server

```bash
$ yarn intall
$ yarn start
```