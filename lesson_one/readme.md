# Basic git commands
GIT - version control

### Initalize a git repository
```bash
git init
```

#### checking status of repo
```bash
git status
```

### files and folder tracking
```bash
git add . # add all files to staging area
git add <file name or folder> # add a single file to staging area
```

### commiting files
```bash
git commit -m "message" # commit all files in staging area
git commit -am "message" # commit all changed files in staging area
```

### cloning a repo
```bash
git clone <repo url> # clone a repo

# using github cli
gh repo clone <repo url> # clone a repo
```

### Push to remote repo
```bash
git push <remote repo url> # push to remote repo
```

### Pull from remote repo
```bash
git pull <remote repo url> # pull from remote repo
```