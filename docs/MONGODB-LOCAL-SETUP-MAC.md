# ClubSphere: Local MongoDB and Event Registration

This version registers students for individual events, not for club membership.

## MongoDB server

Start your local MongoDB Community Server in a separate Terminal:

```bash
mkdir -p ~/data/db
"/full/path/to/mongod" --dbpath ~/data/db
```

Keep it running. It should listen on `127.0.0.1:27017`.

## Project configuration

The project does not use `.env`. Open `config.js`:

```javascript
module.exports = {
    PORT: 5001,
    MONGODB_URI: "mongodb://127.0.0.1:27017/clubsphere",
    ADMIN_KEY: "change-this-to-your-private-admin-key"
};
```

Change `ADMIN_KEY` to a private value.

## Start ClubSphere

From the project folder:

```bash
npm install
npm run dev
```

Open http://localhost:5001.

## How event registration works

1. A student opens a club page.
2. The student fills the form under that club's Upcoming Event.
3. The browser sends the form to `POST /api/events/:eventId`.
4. Express validates the event and saves the student in MongoDB's `eventRegistrations` collection.
5. The coordinator enters the admin key to view only attendees for that event.

## Inspect registrations

If MongoDB Shell (`mongosh`) is installed:

```javascript
use clubsphere
show collections
db.eventRegistrations.find().pretty()
db.eventRegistrations.find({ eventId: "techknow-coding" }).pretty()
```

MongoDB Shell is a separate download from MongoDB Community Server.


## Student registration checks

The event form offers CSE, ECE and AI & DS. It accepts only an IIIT Kota college email ending in `@iiitkota.ac.in`, for example `2025kuad3011@iiitkota.ac.in`. This is a format/domain check; it does not send a verification email or prove mailbox ownership.
