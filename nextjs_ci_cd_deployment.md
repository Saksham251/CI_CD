# 🌟 Next.js CI/CD Deployment on EC2

## 1️⃣ Workflow Diagram

```
GitHub (main branch)
        |
        | push
        v
GitHub Actions (Workflow runs)
        |
        | SSH via appleboy/ssh-action
        v
EC2 Instance
 ┌───────────────────────────┐
 │ ~/CI_CD folder             │
 │                           │
 │ 1. git pull               │ <- Fetch latest code
 │ 2. npm install            │ <- Install dependencies
 │ 3. npm run build           │ <- Production build
 │ 4. pm2 restart/start app  │ <- Background process
 └───────────────────────────┘
        |
        v
Next.js App Running @ http://EC2_PUBLIC_IP:3000
```

---

## 2️⃣ EC2 One-time Setup

```bash
ssh -i saksham_ssh.pem ubuntu@<EC2_PUBLIC_IP>
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc
nvm install 24.9.0
npm install -g pm2
pm2 startup
pm2 save
```

---

## 3️⃣ deploy.sh (EC2 Script)

```bash
#!/bin/bash
set -e

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

cd ~/CI_CD

echo "📥 Pulling latest code..."
git reset --hard
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building Next.js app..."
npm run build

echo "🚀 Starting app with PM2..."
pm2 restart next-app || pm2 start npm --name "next-app" -- run start

# Make executable:
chmod +x ~/CI_CD/deploy.sh

# ✅ Local Deploy Test:
# cd ~/CI_CD
# ./deploy.sh
```

---

## 4️⃣ GitHub Actions Workflow (`deploy.yml`)

```yaml
name: Deploy Next.js to EC2

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ubuntu
          key: ${{ secrets.PRIVATE_SSH_KEY }}
          port: 22
          script: ./deploy.sh
```

---

## 5️⃣ Notes

- 💻 Local dev: `npm run dev`  
- 🚀 Production deploy: GitHub Actions triggers `deploy.sh`  
- 🔧 PM2: keeps app running in background  
- ⚠️ Git pull conflicts: `git reset --hard`  
- ✅ Local `deploy.sh` can be tested to ensure production deployment works

