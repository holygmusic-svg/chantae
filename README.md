# Chantae Sierra | Ethereal Flora — Editorial Model Portfolio

A single-page editorial personal brand site: kinetic masked hero reveal, Lenis smooth
scrolling, slow marquee, digitals/measurements strip, bento portfolio with full-screen
lightbox, testimonials, and a booking form that saves enquiries to MongoDB.

## Stack
- Frontend: React 19 + CRACO (CRA), Tailwind CSS, framer-motion, lenis, react-fast-marquee, sonner, axios
- Backend: FastAPI + Motor (async MongoDB)
- Database: MongoDB

## Run locally

### Backend
```bash
cd backend
pip install -r requirements.txt
# make sure MongoDB is running, edit .env if needed
uvicorn server:app --host 0.0.0.0 --port 8001
```

### Frontend
```bash
cd frontend
yarn install        # or: npm install
# set REACT_APP_BACKEND_URL in .env to your backend URL (default http://localhost:8001)
yarn start          # or: npm start
```

Open http://localhost:3000

## Editing content
All site text, name, brand, stats, photos, email and socials live in ONE file:
`frontend/src/content.js`
The browser tab title + description are in `frontend/public/index.html`.

## API
- `GET  /api/` — health check
- `POST /api/contact` — save a booking enquiry {name, email, inquiry_type, message}
- `GET  /api/contact` — list enquiries
