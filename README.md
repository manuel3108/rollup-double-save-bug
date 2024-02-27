# rollup repro

issue link: https://github.com/rollup/plugins/issues/1689

## instructions

-   `pnpm i`
-   `pnpm dev`
-   wait for the first full build
-   open `projects/core/index.ts` and save to trigger a partial rebuild (important)
-   now change the number in the `console.log()`, and save.
-   open `projects/core/build/index.js`. You will still find the previous number from the `console.log`
