---
title: "How to Break Everything"
description: "A comprehensive guide to destroying your documentation site in creative ways."
navLabel: "Breaking Things"
navIcon: "💥"
order: 1
---

Welcome to the **DANGER ZONE**! 🔥 If you want to see beautiful red error messages cascade across your terminal like a digital waterfall, you've come to the right place.

## The YAML Catastrophe

The easiest way to break everything is to mess up your frontmatter. It's like playing Jenga with your site's foundation!

```yaml
---
title: "This will definitely work"
  description: "Just kidding, extra space = chaos"
---
```

**Pro Tip:** Mix tabs and spaces for maximum confusion. Your code editor will hate you, your linter will cry, and your build will fail spectacularly. It's the trifecta of disaster! 🎯

## The Infinite Loop of Doom

Create two pages that link to each other and watch the universe implode:

1. Page A links to Page B
2. Page B links to Page A
3. Users click forever
4. Browser tabs multiply
5. RAM usage goes to infinity
6. ???
7. Profit! 💰

## The "Oops I Deleted That" Method

Want to see what happens when critical files disappear? Try these:

### Delete `data/config.ts`

**Result:** Your site forgets how to navigate. It's like removing the GPS from a self-driving car. Chaos ensues.

### Delete `src/content.config.ts`

**Result:** Your content collections vanish into the void. Poof! 💨

### Delete `package.json`

**Result:** npm has a complete existential crisis. "Who am I? What are dependencies? Why do I exist?"

## The Typo Tornado

One character can bring down empires:

```typescript
// ❌ This will haunt your dreams
export const SIDEBAR_NAVIGATION = {
  docs: {
    groups: [
      {
        id: "guides",
        lable: "Guides",  // Did you spot it? 😈
      }
    ]
  }
}
```

TypeScript will yell at you, but will you listen? Probably not until 3 AM when you're debugging.

## The Circular Dependency Dance

Import A from B. Import B from A. Watch the build system have an existential crisis:

```typescript
// file-a.ts
import { thingFromB } from './file-b';

// file-b.ts
import { thingFromA } from './file-a';

// Build system: "I quit."
```

## The "It Works on My Machine" Special

1. Use absolute paths everywhere
2. Hardcode your local file system paths
3. Commit to Git
4. Watch your teammates suffer
5. Claim innocence

```typescript
// ❌ The path to madness
const myFile = "C:\\Users\\YourName\\Documents\\project\\file.ts";
```

## The Frontmatter Freestyle

Who needs consistency? Let's get creative:

```markdown
---
title: "My Page"
TITLE: "Wait, which one?"
Title: "I'm so confused"
tItLe: "Stop it"
---
```

Spoiler: Only the first one works. The rest are just vibing.

## The Build Size Explosion

Want a 500MB documentation site? Easy!

1. Add unoptimized 4K images everywhere
2. Import entire libraries for one function
3. Include every font on Google Fonts
4. Never minify anything
5. Congratulations, your users hate you! 🎉

## The "I'll Fix It Later" Commit

```bash
git commit -m "broken but committing anyway lol"
git push origin main --force
```

**Warning:** Your CI/CD pipeline will have feelings about this. Hurt feelings.

## The Nuclear Option

When nothing else works, try the classic:

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

50% of the time, it works every time. The other 50%? Well, that's why we have backups. You do have backups, right? ...Right?

## Emergency Recovery

If you actually broke something while reading this:

1. `git reset --hard HEAD` (if you haven't committed)
2. `git revert <commit>` (if you have committed)
3. Pretend it never happened
4. Learn from your mistakes (optional)

Remember: The best way to learn is by breaking things! Just maybe not in production. 😅

---

**Disclaimer:** Please don't actually do any of this. We're not responsible for broken builds, angry teammates, or existential crises. But if you do, at least you'll have a good story! 🚀
