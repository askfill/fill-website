# fill-website

CSS and JavaScript layered on top of the fill.work Webflow site: glass frames, hero motion, customer logos, agent rule cards and the other polish passes.

Webflow still owns the pages, text and base styles. These two files add to them.

| File | What it holds |
|---|---|
| `css/fill-site.css` | All added styles |
| `js/fill-site.js` | All added behaviour |

The heading type scale is not in here. It lives in its own embed in the Webflow Footer component and stays there.

## How the site loads it

Webflow loads both files from this repo through jsDelivr, pinned to one commit and checked with an integrity hash. A commit ID always points to the same files, and the browser refuses a file whose hash does not match, so nothing can change on the live site without a new Webflow publish.

They are two registered site scripts (Webflow > Site settings > Custom code > Scripts):

| Script | Where | What it does |
|---|---|---|
| `fill site css` | Head | A tiny loader that adds the stylesheet below, so the page renders with it from the start |
| `fill site js` | Footer | Loads the script below |

What they add to the page:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/askfill/fill-website@COMMIT-ID/css/fill-site.css" integrity="sha384-HASH-OF-THE-CSS-FILE" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/gh/askfill/fill-website@COMMIT-ID/js/fill-site.js" integrity="sha384-HASH-OF-THE-JS-FILE" crossorigin="anonymous" defer></script>
```

The site's own head and footer code (consent, trackers, cookie banner, Intercom) is separate and untouched.

## Making a change

1. Edit the files and test on the Webflow staging site.
2. Commit and push. Optionally tag the commit (`v24`, `v25` ...) as a readable name; Webflow does not use the tag.
3. Take the full commit ID (`git rev-parse HEAD`) and the two hashes:
   - `echo "sha384-$(openssl dgst -sha384 -binary css/fill-site.css | openssl base64 -A)"`
   - `echo "sha384-$(openssl dgst -sha384 -binary js/fill-site.js | openssl base64 -A)"`
4. Register new versions of the two Webflow scripts with that commit ID and those hashes. Claude can write the finished lines from the commit ID.
5. Apply the new versions, remove the old ones, publish staging, test, then publish the live site.

## Undo

Apply the previous versions of the two scripts again and publish. Every commit stays in this repo's history, and jsDelivr keeps serving old commits.

## llms.txt

`llms.txt` is the summary that AI assistants read about fill.work. Webflow serves it, but only Enterprise plans can change it through the API, so after editing this copy, paste it into Webflow (Site settings > SEO) and publish. Keep every link pointing at a live page.

## Rules

- Prefix every new class. A short bare class name once collided with a Webflow class and hid a customer story.
- Never italic text. Straight quotes only.
- Nothing secret goes in here: the repo is public, and the same code is readable in any browser on the live site.
