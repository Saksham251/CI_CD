cd CI_CD
git pull origin main
npm install
npm run build 
npm run start
pm2 restart next-app || pm2 start npm --name "next-app" -- run start