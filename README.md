# LifeFlow Backend Server Source Code

- Base API: https://lifeflow-server.onrender.com/api/v1
- Backup API: https://lifeflow-server.vercel.app/api/v1
- Server Health Check: https://lifeflow-server.onrender.com/health
- Backup Health Check: https://https://lifeflow-server.vercel.app/health

## 📦 Packages
- Mongoose
- Cors
- JWT
- Express
- Morgan
- Stripe
- Dotenv
- Cookie-Parser

## **Package Manager**

- pnpm

## Folder Structure

```
lifeflow-server
 ┣ .vscode
 ┃ ┗ settings.json
 ┣ src
 ┃ ┣ api
 ┃ ┃ ┣ auth
 ┃ ┃ ┃ ┣ controllers
 ┃ ┃ ┃ ┃ ┣ createAuthCookie.js
 ┃ ┃ ┃ ┃ ┣ index.js
 ┃ ┃ ┃ ┃ ┗ removeAuthCookie.js
 ┃ ┃ ┃ ┗ index.js
 ┃ ┃ ┣ blog
 ┃ ┃ ┃ ┣ controllers
 ┃ ┃ ┃ ┃ ┣ addBlog.js
 ┃ ┃ ┃ ┃ ┣ deleteBlog.js
 ┃ ┃ ┃ ┃ ┣ getBlogs.js
 ┃ ┃ ┃ ┃ ┣ index.js
 ┃ ┃ ┃ ┃ ┣ updateBlog.js
 ┃ ┃ ┃ ┃ ┗ updateBlogStatus.js
 ┃ ┃ ┃ ┗ index.js
 ┃ ┃ ┣ funding
 ┃ ┃ ┃ ┣ controllers
 ┃ ┃ ┃ ┃ ┣ addPayment.js
 ┃ ┃ ┃ ┃ ┣ getAllFundings.js
 ┃ ┃ ┃ ┃ ┣ getFundingAmmount.js
 ┃ ┃ ┃ ┃ ┣ index.js
 ┃ ┃ ┃ ┃ ┗ paymentIntent.js
 ┃ ┃ ┃ ┗ index.js
 ┃ ┃ ┣ location
 ┃ ┃ ┃ ┣ controllers
 ┃ ┃ ┃ ┃ ┣ getDistricts.js
 ┃ ┃ ┃ ┃ ┣ getUpazilas.js
 ┃ ┃ ┃ ┃ ┗ index.js
 ┃ ┃ ┃ ┗ index.js
 ┃ ┃ ┣ request
 ┃ ┃ ┃ ┣ controllers
 ┃ ┃ ┃ ┃ ┣ deleteRequest.js
 ┃ ┃ ┃ ┃ ┣ getRequests.js
 ┃ ┃ ┃ ┃ ┣ getRequestsByStatus.js
 ┃ ┃ ┃ ┃ ┣ getTotalRequest.js
 ┃ ┃ ┃ ┃ ┣ index.js
 ┃ ┃ ┃ ┃ ┣ saveRequest.js
 ┃ ┃ ┃ ┃ ┣ updateReqStatus.js
 ┃ ┃ ┃ ┃ ┗ updateRequest.js
 ┃ ┃ ┃ ┗ index.js
 ┃ ┃ ┗ user
 ┃ ┃ ┃ ┣ controllers
 ┃ ┃ ┃ ┃ ┣ getDonors.js
 ┃ ┃ ┃ ┃ ┣ getTotalUsers.js
 ┃ ┃ ┃ ┃ ┣ getUser.js
 ┃ ┃ ┃ ┃ ┣ getUsers.js
 ┃ ┃ ┃ ┃ ┣ index.js
 ┃ ┃ ┃ ┃ ┣ saveUser.js
 ┃ ┃ ┃ ┃ ┣ updateUser.js
 ┃ ┃ ┃ ┃ ┣ updateUserRole.js
 ┃ ┃ ┃ ┃ ┗ updateUserStatus.js
 ┃ ┃ ┃ ┗ index.js
 ┃ ┣ config
 ┃ ┃ ┗ index.js
 ┃ ┣ db
 ┃ ┃ ┗ connectDB.js
 ┃ ┣ lib
 ┃ ┃ ┗ auth
 ┃ ┃ ┃ ┗ createToken.js
 ┃ ┣ middlewares
 ┃ ┃ ┣ applymiddleware.js
 ┃ ┃ ┗ verifyToken.js
 ┃ ┣ models
 ┃ ┃ ┣ Blog.js
 ┃ ┃ ┣ District.js
 ┃ ┃ ┣ Funding.js
 ┃ ┃ ┣ Request.js
 ┃ ┃ ┣ Upazila.js
 ┃ ┃ ┗ User.js
 ┃ ┣ routes
 ┃ ┃ ┣ auth
 ┃ ┃ ┃ ┗ index.js
 ┃ ┃ ┣ blog
 ┃ ┃ ┃ ┗ index.js
 ┃ ┃ ┣ funding
 ┃ ┃ ┃ ┗ index.js
 ┃ ┃ ┣ location
 ┃ ┃ ┃ ┗ index.js
 ┃ ┃ ┣ request
 ┃ ┃ ┃ ┗ index.js
 ┃ ┃ ┗ user
 ┃ ┃ ┃ ┗ index.js
 ┃ ┣ utils
 ┃ ┃ ┣ error.js
 ┃ ┃ ┣ mongoose.js
 ┃ ┃ ┗ router.js
 ┃ ┗ app.js
 ┣ .gitignore
 ┣ LICENSE
 ┣ index.js
 ┣ package.json
 ┣ pnpm-lock.yaml
 ┣ reame.md
 ┗ vercel.json
```
