A simple movie watch-list built in Next.js using TypeScript, Tailwind and Shadcn.

Using search functionality, listing genres, dynamic routing, caching, SSR and Dark Mode functionality to mention some key points.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Starting the project

First, install npm:

```bash
npm install
```

To start the server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

#### To list movies, you need to create your own .env.local (view .env.example file) file on the project root containing your API Read Access Token, like this:

```
TMDB_API_KEY="YOUR_API_READ_ACCESS_TOKEN"
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
