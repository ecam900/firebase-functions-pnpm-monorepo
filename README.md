# Minimal Demo

Demonstrating that we cannot import from shared packages in pnpm monorepos, from within firebase functions.

## How To Replicate

**CONTROL:**
To test working function, build and run emulators with: `pnpm build:and-emulate`. This should run as expected.

**BUG:**
Go to [the single exported firebase funciton](https://github.com/ecam900/firebase-functions-pnpm-monorepo/blob/main/apps/server/src/functions/index.ts) and uncomment/comment corresponding lines (follow instructions on page).

If you run `pnpm build:and-emulate` - it does not compile. It seems to be because the function is imported from `packages/core`.

Here's a [video demo](https://www.loom.com/share/e2aeb43a4ee04decbf1af081a4148729)
