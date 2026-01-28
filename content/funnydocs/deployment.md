---
title: "Deploying on Friday at 5 PM"
description: "A comprehensive guide to making terrible life decisions and living with the consequences."
navLabel: "Friday Deploys"
navIcon: "🚀"
order: 4
---

*A Horror Story in Three Acts*

## Act I: The Decision

It's Friday. 4:45 PM. You've just finished a feature. The tests pass (locally). Your code is beautiful. Your commit message is descriptive. You think to yourself:

> "What could possibly go wrong?"

**Narrator:** *Everything. Everything could go wrong.*

## The Classic Deployment Protocol

1. Run `npm run build` locally
2. It works? Perfect! ✅
3. Push to main
4. Trigger deployment
5. Close laptop
6. Head to happy hour 🍺
7. Phone starts buzzing
8. 47 Slack messages
9. 23 emails
10. 1 very angry manager
11. Site is down
12. Weekend is ruined
13. Regret

## The "It Works on My Machine" Defense

**You:** "But it worked on my machine!"

**Production:** "I don't care about your machine."

**You:** "But the tests passed!"

**Production:** "Your tests are lies."

**You:** "But—"

**Production:** "No."

### Why It Works Locally But Not in Production

1. **Different Node versions** - You: 18.2.0, Production: 16.0.0
2. **Environment variables** - You have them, production doesn't
3. **Case-sensitive file systems** - macOS is forgiving, Linux is not
4. **Cached dependencies** - Your `node_modules` is a beautiful lie
5. **The universe hates you** - This is the real reason

## The Friday Deployment Checklist

Before deploying on Friday, ask yourself:

- [ ] Do I enjoy my weekend?
- [ ] Do I like sleeping?
- [ ] Am I fond of my sanity?
- [ ] Do I want to keep my job?

If you answered "yes" to any of these, **DO NOT DEPLOY ON FRIDAY**.

## But If You Must Deploy on Friday

### Step 1: Acceptance

Accept that you've made a terrible decision. This is your life now.

### Step 2: The Pre-Deploy Ritual

```bash
# Run all the checks
npm run check
npm run test
npm run build
npm run preview

# Pray to the deployment gods
echo "Please work" | cowsay

# Sacrifice a rubber duck
# (Metaphorically. Probably.)
```

### Step 3: The Deployment

```bash
git push origin main

# Now watch the CI/CD pipeline like a hawk
# Don't blink
# Don't breathe
# Just watch
```

### Step 4: The Monitoring Phase

Open these tabs:

1. Deployment dashboard
2. Error monitoring (Sentry, etc.)
3. Analytics
4. Server logs
5. Your resume (just in case)

### Step 5: The Panic

Something broke. Of course it did. It's Friday.

## Common Friday Deployment Disasters

### The Environment Variable Apocalypse

```bash
# Local
PUBLIC_API_URL=http://localhost:3000

# Production
PUBLIC_API_URL=undefined

# Result
💥 Everything is broken
```

**Solution:** Remember to set environment variables in your deployment platform. You know, that thing you forgot to do.

### The Build Size Explosion

```bash
# Local build
✓ Built in 45s
✓ Size: 2.3 MB

# Production build
✗ Build failed: Out of memory
✗ Size: 847 MB
✗ Time: ∞
```

**What happened:** You imported the entire lodash library for one function.

**Solution:** Import only what you need, or just rewrite the function yourself. It's probably 3 lines.

### The Dependency Hell

```bash
# Local
npm install
✓ 1,247 packages installed

# Production
npm install
✗ Error: Cannot resolve dependency tree
✗ Peer dependency conflict
✗ The universe is ending
```

**Solution:**

```bash
rm -rf node_modules package-lock.json
npm install
# Hope for the best
```

### The Cache Catastrophe

**User:** "The site is broken!"

**You:** "It works for me..."

**User:** "Well it doesn't work for me!"

**You:** "Have you tried clearing your cache?"

**User:** "What's a cache?"

**You:** *Internal screaming*

**Solution:** Add cache-busting headers. Or just tell everyone to hard refresh. Forever.

## The Rollback of Shame

When everything goes wrong (and it will), you need to rollback:

```bash
# The walk of shame
git revert HEAD
git push origin main

# Or the nuclear option
git reset --hard HEAD~1
git push --force origin main

# Send apology email
echo "Sorry team, rolling back" | mail -s "Oops" team@company.com
```

## Platform-Specific Disasters

### Vercel: The Optimist

**Vercel:** "Deploying... ✓ Success!"

**Reality:** 404 on every page

**You:** "But you said success!"

**Vercel:** "I lied."

### Netlify: The Pessimist

**Netlify:** "Build failed"

**You:** "Why?"

**Netlify:** "Yes."

**You:** "That's not an answer"

**Netlify:** "Exactly."

### GitHub Pages: The Traditionalist

**GitHub Pages:** "I only serve static files"

**You:** "This IS a static file"

**GitHub Pages:** "Is it though?"

**You:** "Yes!"

**GitHub Pages:** "Prove it."

### AWS: The Expensive Friend

**AWS:** "Deployed successfully!"

**You:** "Great! How much?"

**AWS:** "$847.32"

**You:** "For what?!"

**AWS:** "Yes."

## The Post-Deployment Monitoring

### Hour 1: Cautious Optimism

"It's working! Maybe I'm a genius?"

### Hour 2: Suspicious Silence

"Too quiet... Something's wrong..."

### Hour 3: The First Bug Report

"Ah, there it is."

### Hour 4: Cascade Failure

"Why is everything on fire?"

### Hour 5: Acceptance

"This is fine. Everything is fine."

### Hour 6: Rollback

"Okay, it's not fine."

## The Monday Morning Postmortem

**Manager:** "So, what happened?"

**You:** "Well, you see..."

**Manager:** "Did you deploy on Friday?"

**You:** "...yes"

**Manager:** "There's your problem."

## Lessons Learned (That You'll Forget)

1. **Never deploy on Friday** - Seriously. Just don't.
2. **Test in production-like environment** - Staging exists for a reason
3. **Have a rollback plan** - Hope for the best, plan for the worst
4. **Monitor everything** - If you can't measure it, you can't fix it
5. **Communicate** - Tell people you're deploying
6. **Use feature flags** - Deploy code, enable features later
7. **Automate testing** - Computers are better at this than you
8. **Sleep on it** - Deploy on Monday instead

## The Truth About Deployment

- It will break
- You will panic
- You will fix it
- You will forget what you learned
- You will deploy on Friday again
- The cycle continues

## Emergency Contacts

When everything goes wrong:

1. **Stack Overflow** - Your real documentation
2. **GitHub Issues** - Someone else had this problem
3. **Discord/Slack** - Cry for help
4. **Coffee** - Liquid motivation
5. **Your rubber duck** - The only one who understands

## The Deployment Drinking Game

Take a drink when:

- Build fails ✓
- Tests pass locally but fail in CI ✓✓
- "It works on my machine" ✓✓✓
- Environment variable missing ✓✓✓✓
- Cache issues ✓✓✓✓✓
- Rollback required ✓✓✓✓✓✓

**Warning:** You will get very drunk very quickly.

## Alternative Deployment Strategies

### The "Deploy and Disappear"

1. Deploy
2. Turn off phone
3. Move to another country
4. Change identity
5. Start new life

- **Pros:** No one can blame you
- **Cons:** Everything else

### The "Deploy and Pray"

1. Deploy
2. Close eyes
3. Cross fingers
4. Pray to every deity you can think of
5. Open eyes
6. It worked!
7. Never touch it again

- **Pros:** Sometimes works
- **Cons:** Not a sustainable strategy

### The "Don't Deploy"

1. Don't deploy
2. That's it
3. That's the whole strategy

- **Pros:** Nothing breaks
- **Cons:** Nothing ships

## Conclusion

Deploying on Friday is like playing Russian Roulette with your weekend. Sure, you might get lucky. But do you really want to take that chance?

**The Golden Rule:** If it's Friday and you're thinking about deploying, the answer is no. Always no. Wait until Monday. Your future self will thank you.

**The Exception:** There is no exception. It's never worth it.

---

**Remember:** The best deployment is the one that happens on Monday morning, after coffee, with a rollback plan, and a team standing by. Not Friday at 5 PM with a beer in hand and hope in your heart.

Stay safe out there. 🚀

*P.S. - If you deployed on Friday and it worked, congratulations! You're either very lucky or very good. Probably lucky. Don't let it go to your head. The deployment gods are watching, and they remember.*
