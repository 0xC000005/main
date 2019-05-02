# For Roger and Max:

## Pull the code
OK so I trust that you know how to pull the code. If not, keep reading :)

First create a folder for this project. Cd into it through the terminal

On the github page, press the green button that says clone or download
Run these lines in the terminal after installing git (I think)

```
git clone https://github.com/elgin-pk-rebuild/main.git
```

so that clones it. Idk why but we don't want to work with origin, instead with upstream

```
git remote rm origin
git remote add upstream
```

ok so now you have the code in your laptop.
## How to Use:
So before proceeding plz install node.js and npm
I'm not sure how that would work on windows/linux but I installed it through the terminal

Next install the package.json by running the following line in the terminal:
```bash
npm install package-lock.json
```
This will install all the modules used in the server.

## more important info
Before changing stuff, you want to get the latest code, so:
```
git pull upstream master
```
then do you business, and if the code works, you should push it up in another branch
here's a link: https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
or just type this:
```
git checkout -b <yourname-branchname> 
git add .
git commit -m "<write something>"
git push upstream <yourname-branchname>
```
then go to the github page and make a pull request
Get someone else to approve it (or not XD) and merge the branch

oh btw to go back to the master branch just do
```
git checkout master
```
the end
