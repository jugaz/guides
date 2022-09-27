# Deploy.sh


#### Un pequeño de como hacer un deploy automático

```js
# abort on errors
set -e

green=`tput setaf 2`
reset=`tput sgr0`
echo "${green}############# Install NPM #############${reset}"
echo
npm i

echo
echo "${green}############# Build #############${reset}"
echo
npm run build
# navigate into the build output directory
cd docs

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
echo
echo "${green}############# Deploying #############${reset}"
echo
git init
git add .
git commit -m 'Deploy'

echo
echo "${green}############# Pushing Production  #############${reset}"
echo
#git push -f https_name_proyecto master:production
git push -f ssh_name_proyecto master:production

cd -

echo
echo "${green}############# Pushing Master  #############${reset}"
echo

git add .
git commit -m 'Deploy'
git push -f ssh_name_proyecto master:master

cd -
cd -

echo
echo "${green}############# Checkout #############${reset}"
echo
git checkout -f production
rm -rf docs/ 
rm -rf node_modules/
rm -rf package-lock.json

cd -
```