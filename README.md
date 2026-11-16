# ClubSphere – College Clubs Portal

A beginner-friendly college clubs website built with HTML, CSS, JavaScript, Node.js, Express and local MongoDB Community Server.

## Features

- Homepage with Techknow, Sports, Clutch, CACS and NEON.
- Individual page for each club.
- Club information, activities, sample upcoming event, coordinator and team sections.
- Students register for a specific upcoming event, not for club membership.
- Homepage club cards include relevant activity photos.
- Students can withdraw an event registration using the same roll number and official college email.
- Branch options include CSE, ECE and AI & DS.
- Registration accepts only official IIIT Kota email addresses ending in `@iiitkota.ac.in`. Each event card has its own Register button; the form opens inside that card only when clicked.
- Event attendee lists are shown separately for each event and protected by a coordinator key.
- One MongoDB collection named `eventRegistrations`, with an `eventId` field to separate events.
- Responsive layout for mobile and desktop.
- No `.env` file is required. Settings are in `config.js`.

## Requirements

- Node.js and npm
- MongoDB Community Server running locally
- VS Code (recommended)

## Setup

1. Open this folder in VS Code.
2. Open the terminal in the project folder.
3. Install packages:

   ```bash
   npm install
   ```

4. Check `config.js`. The default settings are:

   ```javascript
   module.exports = {
       PORT: 5001,
       MONGODB_URI: "mongodb://127.0.0.1:27017/clubsphere",
       ADMIN_KEY: "change-this-to-your-private-admin-key"
   };
   ```

5. Start MongoDB Community Server in a separate Terminal window. Use the actual path to your extracted `mongod` executable:

   ```bash
   mkdir -p ~/data/db
   "/full/path/to/mongod" --dbpath ~/data/db
   ```

   Keep that Terminal window open. Wait for MongoDB to report that it is listening on `127.0.0.1:27017`.

6. In another Terminal window, start ClubSphere:

   ```bash
   npm run dev
   ```

7. Open http://localhost:5001

## Event registration

- Open a club page from the homepage.
- Find its Upcoming Event section.
- Fill out **Register for this event**.
- The student's details are saved with that event's ID.
- To withdraw, click **Withdraw registration** on the same event card and enter the roll number and college email used during registration. Select CSE, ECE or AI & DS and enter your official college email (for example, `2025kuad3011@iiitkota.ac.in`). The browser and backend both check that the email ends in `@iiitkota.ac.in`.
- To view attendees, enter the `ADMIN_KEY` from `config.js` and click **View attendees**.

## MongoDB

All event registrations are stored in the `eventRegistrations` collection in the `clubsphere` database. Each document has an `eventId`, so attendee lists are filtered by event. Withdrawals delete only the matching event registration when both roll number and college email match. A student can register once for each event and can register for other events too.

Example MongoDB query:

```javascript
use clubsphere
db.eventRegistrations.find({ eventId: "techknow-coding" }).pretty()
```

## Important notes

- Event names, times, locations, coordinator/team names and photos are sample content. Replace them with confirmed college information.
- The 15 current sample event IDs (three per club) are defined in `routes/eventRegistrations.js` and `public/club.js`. If you add or rename an event, update both files.
- To add a coordinator or teammate photo, put the image inside `public/images/` and set their `photo` value in `public/club.js`, for example `images/coordinator.jpg`.
- The coordinator key is a simple shared key for this beginner project. For a public production website, use proper coordinator accounts, password hashing, sessions or tokens, HTTPS and stronger access controls.
- Do not publish real private keys in a public GitHub repository.
