# CloudOnboard

Marketing site for CloudOnboard, a senior IT architecture practice.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Copy `.env.example` to `.env.local`.

- `NEXT_PUBLIC_SITE_URL` — canonical URL used in metadata and the sitemap.
- `NEXT_PUBLIC_CALENDLY_URL` — optional. When set, the contact section links to this calendar. When empty, the calendar action falls back to email.

The consultation form validates with Zod on the client and again in a server action, then emails the request to `mohamad.yonos@cloudonboard.ca`. The first delivery asks that inbox to confirm the form address.
