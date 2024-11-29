# Next.js Local Docker Postgres setup

This is a quick Next.js site to test the Local Docker with Vercel Postgres support. The [doc Vercel offers](https://vercel.com/docs/storage/vercel-postgres/local-development#local-development-with-vercel-postgres) is no longer up to date and the connection never works. This is due to the `@drizzle-orm` and `@vercel/postgres` uses different version of `@neondatabase/serverless` causes this. The only possible fix for now is to override the `@neondatabase/serverless` through `package.json`.

For `npm` user:

```json
"overrides": {
  "@neondatabase/serverless": "0.10.4"
}
```

For `pnpm` user:

```json
"pnpm": {
  "overrides": {
    "@neondatabase/serverless": "^0.10.4"
  }
}
```

`package-lock.json` or `pnpm-lock.yaml` needs to be remove and rebuild as well as the `node_modules`.

## Resource

- [Vercel GitHub issue](https://github.com/vercel/storage/issues/123#issuecomment-2500543485)
- [Initial explanation](https://github.com/vercel/storage/issues/123#issuecomment-2500543485)
- [Detailed blogpost](https://gal.hagever.com/posts/running-vercel-postgres-locally)
- [Vercel blogpost](https://vercel.com/docs/storage/vercel-postgres/local-development#local-development-with-vercel-postgres)
