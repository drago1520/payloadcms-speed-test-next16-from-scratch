This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
bun dev
```
This includes Docker containers for development with S3 buckets, email & MongoDB.
On changes to the Database structure run 
```bash
bun types2
```
to generate types.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Analytics
Posthog captures every event even with Brave & Ublock origin lite ad blockers