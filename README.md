## Coven - SpiderNotes

 [![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/ehouse/coven)

### Getting Started

First step is to install and setup Amplify CLI. It's needed to create the infrastructure needed to test/deploy an instance of the project.

```bash
npm install -g @aws-amplify/cli
amplify pull
amplify env checkout dev
```
Setup a new user (or reuse an existing IAM) and create a new credential key/pair. Otherwise use all of the default settings, making sure to pull down the backend environment.

Once that is run it should create the files necessary to mock the API/Database.

```bash
## Start the development webserver
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
