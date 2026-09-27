# BingeBlocker website

A responsive React website built with Vite, React Router, Tailwind CSS, and Lucide icons.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it locally with `npm run preview`.

## Configuration

Set these Vite environment variables before starting or building the site:

| Variable | Purpose |
| --- | --- |
| `VITE_CHROME_WEB_STORE_URL` | Official Chrome Web Store listing URL. When unset, install buttons lead to the installation guide, which clearly indicates that the listing URL is not configured. |
| `VITE_SUPPORT_SUBMISSION_ENDPOINT` | Endpoint accepting support form JSON by `POST`. When unset, the support forms validate in the browser and explicitly report that submissions are not delivered or saved. |

The support endpoint must be configured to accept cross-origin requests from the deployed site. Its validation, spam protection, storage, and privacy disclosures are the responsibility of the endpoint operator.

## Before publishing

- Set and verify the official Chrome Web Store listing URL.
- Connect a real support endpoint or keep the forms clearly in demo mode.
- Verify the extension’s permissions, data practices, feature behavior, browser requirements, and published pricing. The feature previews and copy intentionally qualify behavior that has not been verified.
- Complete the privacy notice with the extension’s verified data practices, hosting provider information, support endpoint retention practices, and a real contact channel.
- Add verified release notes and roadmap items when they are available; none are fabricated in this site.
