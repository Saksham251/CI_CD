cd CI_CD
git pull
npm install
npm build 
npm run start
pm2 restart next-app || pm2 start npm --name "next-app" -- run start