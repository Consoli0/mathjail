# m a t h e m a t i c s j a i l
I read about a mathematics jail problem, and decided to do one

There are 100 jail cells, they are all closed, there are 100 guards, each has a key that can lock and unlock every cell.

- Guard 1 toggles (unlocks in this case) every cell.
- Guard 2 toggles (locks in this case) every 2nd cell.
- Guard 3 toggles every 3rd cell.
And so on.

What's the intermediate and final values?

That's what I set out to do, and succeeded.

You can view the finished products in `mathjail.txt` and `mathjail_debug.txt`

1. To try this for yourself, clone this repo to your machine and run `npm install` inside of the repository, wait for everything to install, then move on to step 2.
2. If you want to skip compiling (don't, there isn't a reason to skip it), then just run `node mathjail.js`, if you want more info in the finished file, run `node mathjail.js debug` instead. You can skip the next steps if you did this.
3. To compile, run `tsc mathjail.ts`
4. Run it with `node mathjail.js` or `node mathjail.js debug`

Made in TypeScript.

❤ - Consolio

<details>
  <summary>p.s.</summary>
  
  this came right out of my testing folder so that's why I commited the files on GitHub instead of pushing from a local repo.
  
  ok love you all bye
</details>
