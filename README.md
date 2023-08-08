# Gogig Web APP API

This project is for GoGig using the following technologies: 
- Frontend: REACT,TypeScript
- Backeend: Node.js,Serverless
- Server: AWS, Mysql Workbench



## Running the file 


1. **Node.js**: Make sure you have Node.js installed. You can download it from the official website: [https://nodejs.org/](https://nodejs.org/)

2. **Clone Repository**: Clone this repository to your local machine using: `https://github.com/neogigogig/gogig-api.git`


3. **Navigate to Project Directory**: Change into the project directory: `cd gogig`

4. **Install Dependencies**: Install the project dependencies using npm (Node Package Manager): 
- `npm install`
- `npm install -g serverless`

5. **Run the API** : Type the Command: `sls offline start  `

## Importent

Before running the project Create an .env sample file where the below data should be present 
```
ENDPOINT = "127.0.0.1"
PASSWORD = "your_password"
USERNAME = "root"
DATABASE = "gogig"
```


## Putting data into github

Commands for pushing the data in the Git Hub
```
Git status
Git init
Git add . 
Git commit -m "first commit"
Git push
```

### link `http://localhost:5000/add-user`