# NextJs CRUD Operation

NextJs CRUD operation using Prisma, MySQL, ShadCN.

Note:

* `npx` == `yarn dlx` == `pnpm dlx`
* `npm run` == `yarn` == `pnpm`

Steps to follow:

* install all the required packages using `npm install`, `yarn install`, or `pnpm install`
* create your schema and push it to the database
  `npx prisma init`
  then fill the `.env` file with your credentials
  then create the database schema
  `npx prisma db push`
  then generate classes of the schema
  `npx prisma generate`
* run the application using `pnpm dev` on localhost:3000