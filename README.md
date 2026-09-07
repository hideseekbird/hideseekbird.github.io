# Hide & Seek — GitHub Pages website

This folder is ready for GitHub Pages.

## Current live wiring

- **iPhone beta:** the homepage button links to the public TestFlight at `https://testflight.apple.com/join/pFGsT41k`.
- **Android beta:** Google Play Open testing is not available yet, so the Android button opens the mailing-list signup as a waitlist.
- **Mailing list:** the homepage and footer use the Kit embed with UID `2d5aa97600`.
- **Privacy:** the Privacy Policy includes the website mailing-list/Kit processing.

## Files

- `index.html` — homepage and mailing-list modal
- `site.js` — mailing-list modal behaviour
- `contact.html` — contact page
- `privacy.html` — privacy policy
- `faq.html` — FAQ placeholder
- `styles.css` — all visual styling and responsive rules
- `assets/hero-hide.png` — homepage background
- `assets/hero-meadow.png` — contact/legal-page background

## Publish with GitHub Pages

1. Upload/replace these files and the `assets` folder in the repository root.
2. Commit the changes to the branch used by GitHub Pages (normally `main`).
3. GitHub Pages will redeploy the site automatically.

## When Android Open testing becomes available

In `index.html`, replace the Android waitlist anchor with the Google Play Open testing URL and change the button text to `Test on Android`. The iPhone and Kit links can stay as they are.
