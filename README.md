# Majewska — website

Static bilingual French/English business website.

## Contact email
The contact email is set to `primekajun@gmail.com` in `index.html`.

## Deploy with GitHub + Cloudflare Pages
1. Extract this ZIP.
2. Upload `index.html`, `styles.css`, and `README.md` to the root of your GitHub repository.
3. In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git**.
4. Select the repository and production branch (`main`).
5. For a static HTML site, use build command `exit 0` and output directory `.`.
6. Save and deploy. Later GitHub pushes trigger deployments automatically.

This ZIP updates the source files only. It does not change the already-published Cloudflare site; redeploy the updated files through GitHub to publish the email change.
