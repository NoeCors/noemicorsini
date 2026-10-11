# Research website

Two pages, no build step: `index.html` (About + News) and `research.html` (papers).
Other files: `style.css` (design), `config.js` (your details), `assets/` (your photo).

## 1. Publish on GitHub Pages
1. On github.com click **New repository**. Name it `<your-username>.github.io` to get the address `https://<your-username>.github.io`. Set it to **Public**.
2. Click **uploading an existing file**, drag in **all files and the `assets` folder** → **Commit changes**.
3. **Settings → Pages** → Source: **Deploy from a branch** → branch `main`, folder `/(root)` → **Save**.
4. After 1–2 minutes the site is live at the address shown there.

> If your consultancy site already uses `<username>.github.io`, give this repository another name (e.g. `research`) — it will live at `https://<username>.github.io/research`.

## 2. Your details and links → `config.js`
Open `config.js` → pencil icon (Edit) → change the values between quotes → **Commit changes**:

```js
name:        'Your Name',
position:    'Post-doctoral researcher in Statistical Networks',
institution: 'University of Cambridge',
email:       'you@university.edu',
scholar:     'https://scholar.google.com/citations?user=...',
github:      'https://github.com/yourname',
orcid:       'https://orcid.org/0000-0000-0000-0000',
linkedin:    'https://www.linkedin.com/in/yourname',
consultancy: 'https://...',   // your Statistics Desk site
photo:       'assets/photo.jpg'
```
Name, position, university and every button update on both pages automatically.

## 3. Your photo
Name it `photo.jpg` (portrait, roughly 3:4, under 500 KB). In the repository open `assets` → **Add file → Upload files** → drop it → **Commit changes**.

## 4. Your papers → `research.html`
Papers are grouped: **In progress**, **Preprints**, **Published in refereed journals**.
To add one, copy a whole block from `<li class="paper">` to `</li>`, paste it in the right group, and edit:

```html
<li class="paper"><span class="yr">2025</span><div>
  <h3>Title of the paper</h3>
  <p class="au">Co-author, <b data-field="name">Your Name</b>, Co-author</p>
  <p class="ve">Journal name, 12(3), 45–67</p>
  <div class="pl"><a href="https://...">PDF</a><a href="https://doi.org/...">DOI</a><a href="https://github.com/...">Code</a></div>
</div></li>
```
- Year badge colour: `class="yr"` (blue, published), `class="yr pre"` (red, preprint), `class="yr wip"` (yellow, in progress).
- Remove any link you don't need (e.g. delete `<a href="...">Code</a>`).
- Keep `<b data-field="name">` around your name — it is filled in and highlighted automatically.

## 5. News → `index.html`
Find the News list and copy one `<li>…</li>` (newest at the top):

```html
<li><time>Oct 2026</time><span class="nk pre">Preprint</span><p>New preprint: <a href="https://...">Title</a>, with Co-author.</p></li>
```
Tag colours: `nk pre` (red), `nk talk` (yellow), `nk pos` (blue). Change the tag word freely (e.g. Award, Paper, Visit).

## 6. Your introduction
In `index.html`, find "I develop statistical methods for…" and edit the text.

Any change: open the file → pencil icon → edit → **Commit changes**. The live site updates in 1–2 minutes.
