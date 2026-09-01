# Portfolio Contact API

A tiny Express + Nodemailer backend that receives messages from the portfolio
contact form and emails them straight to your Gmail inbox.

## 1. Local setup

```bash
cd backend
npm install
cp .env.example .env
```

Fill in `.env`:

- `GMAIL_USER` — your Gmail address (e.g. `bissanalmiari@gmail.com`)
- `GMAIL_APP_PASSWORD` — a **Gmail App Password**, not your normal password
- `ALLOWED_ORIGINS` — which frontend URLs are allowed to call this API

### Creating a Gmail App Password

Gmail blocks regular password logins from apps like this one. You need an
App Password instead:

1. Turn on **2-Step Verification** on your Google account, if it isn't
   already: https://myaccount.google.com/security
2. Go to https://myaccount.google.com/apppasswords
3. Create a new App Password (name it e.g. "Portfolio Contact Form")
4. Google gives you a 16-character password — copy it into
   `GMAIL_APP_PASSWORD` in your `.env` (no spaces)

## 2. Run it locally

```bash
npm run dev
```

This starts the API on `http://localhost:5000` (or whatever `PORT` you set).
Test it with:

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello!"}'
```

You should get the email in your Gmail inbox within a few seconds.

## 3. Point the frontend at it

In the **frontend** project (`portfolio/`), set in its `.env`:

```
VITE_API_URL=http://localhost:5000
```

## 4. Deploy the backend

This needs to run somewhere that stays alive (unlike the frontend, which is
static). Free options that work well for a small API like this:

- **Render** (render.com) — free web service tier, connect your GitHub repo,
  set the same environment variables in its dashboard, done.
- **Railway** (railway.app) — similar free-tier flow.
- **Fly.io** — free allowance, a bit more setup via their CLI.

Steps (using Render as an example):

1. Push the `backend/` folder to a GitHub repo (or a subfolder of your
   existing repo — Render lets you set a root directory).
2. On Render: **New → Web Service**, connect the repo.
3. Build command: `npm install`. Start command: `npm start`.
4. Add the environment variables (`GMAIL_USER`, `GMAIL_APP_PASSWORD`,
   `ALLOWED_ORIGINS`) in Render's dashboard — **never commit `.env`**.
5. Set `ALLOWED_ORIGINS` to your real deployed frontend URL, e.g.
   `https://your-portfolio.vercel.app`.
6. Once deployed, copy the Render URL (e.g.
   `https://portfolio-backend.onrender.com`) and set it as `VITE_API_URL`
   in your **frontend's** environment variables on Vercel, then redeploy
   the frontend.

## Notes

- The API rate-limits contact submissions to 5 per 15 minutes per IP to
  cut down on spam/abuse.
- Gmail's personal accounts allow up to ~500 emails/day sent this way,
  far more than a portfolio contact form will ever need.
- CORS is locked to `ALLOWED_ORIGINS` so random sites can't use your API
  to spam your inbox — keep it set to your actual frontend domain(s) in
  production.
