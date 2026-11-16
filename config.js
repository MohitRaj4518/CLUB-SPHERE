// ClubSphere local configuration.
// For this college project, settings are kept here instead of using a .env file.
// Do not publish real passwords or private keys in a public repository.

module.exports = {
    PORT: process.env.PORT || 5001,
    MONGODB_URI: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/clubsphere",
    ADMIN_KEY: process.env.ADMIN_KEY || "change-this-to-your-private-admin-key"
};
