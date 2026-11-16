// Club details and upcoming events for ClubSphere.
// Complete upgraded information for all official college societies.

const clubInformation = {
    techknow: {
        name: "Techknow",
        category: "Technical Society",
        icon: "💻",
        tagline: "Innovating the Future, One Line of Code at a Time.",
        aboutLead: "Techknow is the premier computing and technical society of IIIT Kota, uniting programmers, developers, systems engineers, and AI enthusiasts across all branches and academic years.",
        aboutDetails: [
            "Founded to bridge foundational computer science theory with industry-grade software engineering, Techknow serves as a campus incubator for hackathons, competitive programming, AI/ML research, and open-source software development.",
            "The society operates on an open peer-to-peer mentorship model: senior developers and alumni guide students through algorithmic problem-solving, modern web/app stacks, and system architectures to prepare them for global technical challenges, top hackathons, and GSoC."
        ],
        wings: [
            { icon: "⚡", title: "Competitive Programming (CP)", desc: "Data structures, algorithms, Codeforces rating sprints, and ICPC regional preparation." },
            { icon: "🌐", title: "Full-Stack & Cloud Systems", desc: "Production web platforms, mobile apps, microservices, Docker containerization, and cloud deployment." },
            { icon: "🧠", title: "AI & Data Science", desc: "Machine learning, neural networks, computer vision, natural language processing, and data analytics." },
            { icon: "🛡️", title: "Cybersecurity & Systems", desc: "Linux environments, CTF challenges, cryptographic protocols, and system-level programming." }
        ],
        whatWeDoTitle: "Core Activities & Engineering Initiatives",
        whatWeDoIntro: "Techknow maintains an intensive, hands-on calendar of engineering events and collaborative programs:",
        activities: [
            { title: "24-Hour Flagship Hackathons", desc: "Overnight coding hackathons where multidisciplinary teams conceptualize, build, and deploy production-grade software prototypes." },
            { title: "Weekly Algorithmic Sprints", desc: "Timed problem-solving contests on Codeforces/LeetCode followed by live peer code reviews, editorial walk-throughs, and time-complexity optimizations." },
            { title: "Zero-to-Hero Dev Bootcamps", desc: "Practical weekend workshops covering Git/GitHub, modern JavaScript, backend API architectures, databases, and containerization." },
            { title: "Open-Source Mentorship Program", desc: "Hands-on guidance for Hacktoberfest, Google Summer of Code (GSoC), and making meaningful contributions to open-source software." },
            { title: "Tech Talks & Alumni Roundtables", desc: "Interactive masterclasses featuring software engineers, researchers, and IIIT alumni from leading technology companies." }
        ],
        events: [
            { id: "techknow-coding", name: "Coding Competition", date: "Friday • 4:00 PM", location: "Computer Lab 2 / LT1", timing: "4:00 PM - 5:30 PM", description: "Solve algorithmic puzzles, optimize time complexity, and compete for top leaderboard rankings." },
            { id: "techknow-hackathon", name: "Mini Hackathon", date: "Saturday • 10:00 AM", location: "Main Seminar Hall", timing: "10:00 AM - 6:00 PM", description: "Collaborate in teams of 2–4 to build and demo a working full-stack web or AI application." },
            { id: "techknow-webworkshop", name: "Web Development Workshop", date: "Wednesday • 4:30 PM", location: "LT1", timing: "4:30 PM - 6:00 PM", description: "Hands-on workshop building modern, responsive user interfaces and integrating REST APIs." }
        ],
        coordinator: { name: "Aarav Sharma", role: "Head Coordinator (Algorithms & Systems)", photo: "" },
        team: [
            { name: "Priya Verma", role: "Full-Stack Development Lead", photo: "" },
            { name: "Rohan Kulkarni", role: "AI & Machine Learning Lead", photo: "" },
            { name: "Sneha Patel", role: "Competitive Programming Lead", photo: "" }
        ]
    },

    sports: {
        name: "Sports",
        category: "Athletics & Physical Society",
        icon: "🏏",
        tagline: "Strength, Strategy, Spirit — The Heartbeat of Campus Athletics.",
        aboutLead: "The Sports Club of IIIT Kota is dedicated to athletic discipline, physical resilience, and unyielding teamwork across the university community.",
        aboutDetails: [
            "Athletic fitness is the vital counterpart to academic rigor. The Sports Club ensures that every student has access to structured training sessions, athletic coaching, and competitive intramural tournaments regardless of prior experience.",
            "The club represents IIIT Kota with distinction in regional and national inter-collegiate athletic meets, including the annual Inter-IIIT sports tournament, while promoting daily physical wellbeing and healthy lifestyle habits on campus."
        ],
        wings: [
            { icon: "⚽", title: "Field Sports Division", desc: "Cricket, Football, and track athletics focusing on tactical teamwork, endurance, and field coordination." },
            { icon: "🏸", title: "Court Sports Division", desc: "Badminton, Table Tennis, Volleyball, and Basketball emphasizing agility, lightning reflexes, and match strategy." },
            { icon: "🏋️", title: "Fitness & Conditioning", desc: "Daily morning workouts, calisthenics, crossfit drills, and campus stamina runs." },
            { icon: "🤝", title: "Intramurals & Campus Wellness", desc: "Inter-branch friendly leagues, yoga workshops, and faculty-student exhibition matches." }
        ],
        whatWeDoTitle: "Athletic Excellence & Campus Fitness Programs",
        whatWeDoIntro: "The Sports Club keeps the campus energized with year-round competitive tournaments and conditioning camps:",
        activities: [
            { title: "Annual Campus Premier Leagues", desc: "The biggest intramural sports tournament featuring competitive football leagues, cricket cups, and volleyball championships." },
            { title: "Inter-IIIT Intensive Training Camps", desc: "Structured morning and evening fitness camps focused on tactical play, stamina, and team chemistry ahead of national meets." },
            { title: "Open Badminton & Table Tennis Tournaments", desc: "Fast-paced knockout tournaments for singles and doubles hosted on the campus indoor court facilities." },
            { title: "Campus 5K Marathon & Cyclothon", desc: "Annual endurance runs around the scenic Ranpur permanent campus promoting physical health and community spirit." },
            { title: "Faculty vs. Students Exhibition Series", desc: "Friendly exhibition cricket matches and sports festivals fostering camaraderie across students, faculty, and administration." }
        ],
        events: [
            { id: "sports-football", name: "Football Tournament", date: "Saturday • 4:00 PM", location: "Main Sports Ground", timing: "4:00 PM - 6:30 PM", description: "Inter-batch 7-a-side football tournament. Bring your team, compete under the floodlights, and lift the trophy." },
            { id: "sports-cricket", name: "Cricket Match", date: "Sunday • 9:00 AM", location: "Cricket Ground", timing: "9:00 AM - 1:00 PM", description: "Register your interest for the 15-over campus cricket showdown with professional umpire oversight." },
            { id: "sports-badminton", name: "Badminton Competition", date: "Thursday • 5:00 PM", location: "Indoor Badminton Court", timing: "5:00 PM - 7:30 PM", description: "Singles and doubles knockout tournament played with tournament-grade feather shuttlecocks." }
        ],
        coordinator: { name: "Vikram Rathore", role: "General Sports Secretary", photo: "" },
        team: [
            { name: "Devendra Singh", role: "Field Sports Captain (Football/Cricket)", photo: "" },
            { name: "Ananya Mehta", role: "Court Sports Captain (Badminton/TT)", photo: "" },
            { name: "Kunal Meena", role: "Athletic Conditioning & Equipment Head", photo: "" }
        ]
    },

    clutch: {
        name: "Clutch",
        category: "Esports & Gaming Guild",
        icon: "🎮",
        tagline: "Focus, Reflexes, Domination — Elevating Esports on Campus.",
        aboutLead: "Clutch is the official collegiate esports guild of IIIT Kota, uniting competitive gamers, tactical strategists, and digital entertainment creators.",
        aboutDetails: [
            "Clutch treats competitive gaming as a true digital sport that demands split-second decision making, spatial awareness, mental composure under pressure, and flawless team communication.",
            "From tactical first-person shooters to complex real-time strategy and sports simulations, Clutch provides a structured arena where students transition from casual lobbies to competing on national university leaderboards."
        ],
        wings: [
            { icon: "🎯", title: "Tactical FPS Division", desc: "Valorant, CS:GO, and Battle Royale squads focusing on crosshair precision, callout protocols, and site executions." },
            { icon: "⚔️", title: "MOBA & Real-Time Strategy", desc: "Dota 2, League of Legends, and strategy rosters mastering map macro-control, drafting, and resource management." },
            { icon: "♟️", title: "Mind Sports & Chess", desc: "Online rapid and blitz chess tournaments sharpening logical calculation, positional foresight, and tactical sacrifices." },
            { icon: "⚽", title: "Sports Simulations & Console", desc: "EA FC/FIFA and Rocket League competitive ladders with local high-framerate console setups." }
        ],
        whatWeDoTitle: "Esports Tournaments, Scrims & Community Hub",
        whatWeDoIntro: "Clutch organizes structured university leagues, high-energy LAN parties, and competitive practice sessions:",
        activities: [
            { title: "Campus LAN Tournaments", desc: "High-adrenaline weekend LAN showdowns featuring custom spectator lobbies, bracket elimination, and live student casting." },
            { title: "National Inter-College Qualifiers", desc: "Official tryouts and tactical coaching to represent IIIT Kota in pan-India collegiate esports tournaments." },
            { title: "Weekly VOD Review & Scrimmages", desc: "Organized scrimmages against other college teams paired with detailed video replay analysis to dissect positioning and economy." },
            { title: "Swiss-System Blitz Chess Arenas", desc: "Structured online rapid and blitz chess tournaments featuring master-level openings analysis and student commentary." },
            { title: "Community Live Streams & Watch Parties", desc: "Broadcasting tournament grand finals on YouTube and Twitch with student shoutcasters and interactive community watch parties." }
        ],
        events: [
            { id: "clutch-gaming", name: "Gaming Competition", date: "Saturday • 5:00 PM", location: "Computer Lab 1 / Online", timing: "5:00 PM - 8:00 PM", description: "5v5 tactical tournament. Compete in custom server lobbies with spectator casting and prize pool recognition." },
            { id: "clutch-fifa", name: "Football Game Challenge", date: "Friday • 5:30 PM", location: "Student Activity Center", timing: "5:30 PM - 8:00 PM", description: "1v1 EA FC tournament played on high-refresh displays. Prove your tactical formations and stick skills." },
            { id: "clutch-chess", name: "Online Chess Challenge", date: "Sunday • 3:00 PM", location: "Lichess Portal / LT1", timing: "3:00 PM - 5:00 PM", description: "7-round Swiss blitz chess tournament (3m+2s). Test your calculation speed against campus grandmasters." }
        ],
        coordinator: { name: "Aditya Nair", role: "Esports Guild President", photo: "" },
        team: [
            { name: "Kabir Joshi", role: "Tactical FPS Division Lead", photo: "" },
            { name: "Tanvi Saxena", role: "Mind Sports & Chess Lead", photo: "" },
            { name: "Ayush Goyal", role: "Streaming & Production Manager", photo: "" }
        ]
    },

    cacs: {
        name: "CACS",
        category: "Cultural, Arts & Creative Society",
        icon: "🎭",
        tagline: "Celebrating Rhythm, Resonance, and the Soul of Campus Life.",
        aboutLead: "CACS (Cultural, Arts & Creative Society) is the vibrant artistic heartbeat of IIIT Kota, celebrating music, stage performance, dance, drama, and fine arts.",
        aboutDetails: [
            "Campus life thrives when creativity meets community. CACS provides a welcoming, high-energy stage where vocalists, instrumentalists, dancers, actors, and fine artists discover their artistic voice and build stage confidence.",
            "The society orchestrates the grandest celebrations on campus — from high-energy acoustic jam sessions under the evening sky to thought-provoking street plays (Nukkad Natak), festival galas, and annual cultural extravaganzas."
        ],
        wings: [
            { icon: "🎵", title: "Music & Band Circle", desc: "Classical and western vocalists, indie acoustic groups, rock bands, instrumentalists, and choral ensembles." },
            { icon: "💃", title: "Choreography & Dance", desc: "Contemporary, hip-hop, Bollywood, classical Kathak/Bharatanatyam, and energetic folk dance troupes." },
            { icon: "🎭", title: "Dramatics & Street Theatre", desc: "Nukkad Natak (street plays) addressing social realities, stage dramatics, mime, and improv comedy." },
            { icon: "🎨", title: "Fine Arts & Campus Decor", desc: "Canvas painting, sketching, digital concept art, campus murals, and festival stage design." }
        ],
        whatWeDoTitle: "Stage Productions, Creative Jams & Campus Festivals",
        whatWeDoIntro: "CACS brings the campus together with vibrant artistic events, auditions, and cultural celebrations:",
        activities: [
            { title: "Annual Cultural Fest & Gala Nights", desc: "The grand multi-day campus festival featuring celebrity headliners, band battles, classical showcases, and dance wars." },
            { title: "Acoustic Sunset Jams & Open Mic", desc: "Relaxed outdoor acoustic sessions where singers, instrumentalists, and poets share original work in an open community." },
            { title: "Social Street Plays (Nukkad Natak)", desc: "High-octane outdoor dramatic performances raising awareness on pressing social, mental health, and civic themes." },
            { title: "Inter-Year Dance Face-Offs", desc: "Synchronized group choreographies and solo freestyle battles judged on expression, rhythm, and stage presence." },
            { title: "Festive Campus Celebrations", desc: "Transforming the permanent campus during Diwali, Holi, and Garba nights with rangoli art, diya lighting, and live folk music." }
        ],
        events: [
            { id: "cacs-cultural", name: "Cultural Evening", date: "Saturday • 6:30 PM", location: "Central Open Amphitheatre", timing: "6:30 PM - 9:30 PM", description: "An evening of live band performances, acoustic medleys, classical fusions, and group dance recitals." },
            { id: "cacs-dance", name: "Dance Auditions", date: "Tuesday • 5:00 PM", location: "Student Activity Center", timing: "5:00 PM - 7:00 PM", description: "Audition for the official IIIT Kota dance troupe across contemporary, western, or classical categories." },
            { id: "cacs-singing", name: "Singing Competition", date: "Thursday • 4:30 PM", location: "LT1", timing: "4:30 PM - 6:30 PM", description: "Solo and duet vocal competition spanning Indian classical, Bollywood unplugged, and Western acoustic genres." }
        ],
        coordinator: { name: "Isha Sundaram", role: "Cultural Society Secretary", photo: "" },
        team: [
            { name: "Varun Deshmukh", role: "Music & Band Circle Lead", photo: "" },
            { name: "Meera Sen", role: "Dance Troupe Choreography Head", photo: "" },
            { name: "Arjun Trivedi", role: "Dramatics & Street Play Lead", photo: "" }
        ]
    },

    neon: {
        name: "NEON",
        category: "Cinematic, Photography & Media Club",
        icon: "🎬",
        tagline: "Capturing Light, Framing Stories, Crafting Visual Masterpieces.",
        aboutLead: "NEON is the official cinematic, photography, and digital visual media society of IIIT Kota, empowering visual storytellers to craft stories through the lens.",
        aboutDetails: [
            "Every frame has the power to inspire, evoke emotion, and document truth. NEON immerses students in the art and craft of visual media — from camera optics and lighting to screenplay writing, documentary directing, and post-production color grading.",
            "The society also acts as the official media chronicler of IIIT Kota, producing cinematic aftermovies, documenting convocation ceremonies, and archiving college life through high-resolution photojournalism."
        ],
        wings: [
            { icon: "🎬", title: "Cinematography & Direction", desc: "Screenplay scripting, storyboarding, dynamic camera movement, 3-point lighting setups, and short film direction." },
            { icon: "📸", title: "Still Photography", desc: "Architectural framing of the campus, portraiture, wildlife, street photography, and night astrophotography." },
            { icon: "✂️", title: "Post-Production & VFX", desc: "Video editing in DaVinci Resolve & Premiere Pro, audio sweetening, motion graphics, and color grading." },
            { icon: "📱", title: "Media Chronicle & Coverage", desc: "Producing cinematic event aftermovies, campus lifestyle reels, interview features, and festival teasers." }
        ],
        whatWeDoTitle: "Film Productions, Photowalks & Visual Masterclasses",
        whatWeDoIntro: "NEON conducts immersive photography walks, film screenings, and technical editing masterclasses:",
        activities: [
            { title: "48-Hour Short Film Challenge", desc: "Intense film sprints where student crews write, shoot, edit, and premiere complete short films within 48 hours." },
            { title: "Campus Golden-Hour Photowalks", desc: "Guided photography expeditions across the architectural permanent campus exploring golden-hour light and natural shadows." },
            { title: "Post-Production Masterclasses", desc: "Comprehensive workshops on timeline pacing, sound design, color LUT grading, and visual effects in industry editing software." },
            { title: "Official College Media Packages", desc: "Complete photographic and cinematic coverage for major campus hackathons, sports meets, and cultural festivals." },
            { title: "Classic Cinema Screenings & Dissections", desc: "Curated film screenings followed by deep-dive analyses on camera angles, pacing, and visual storytelling." }
        ],
        events: [
            { id: "neon-film", name: "Short Film Competition", date: "Saturday • 3:00 PM", location: "Auditorium / LT1", timing: "3:00 PM - 6:00 PM", description: "Screen your short film on the big screen. Judged on scriptwriting, cinematography, sound design, and acting." },
            { id: "neon-photography", name: "Photography Walk", date: "Sunday • 5:00 PM", location: "Campus Main Quadrangle", timing: "5:00 PM - 6:45 PM", description: "Guided photowalk exploring architectural angles, golden-hour portraits, and campus wildlife." },
            { id: "neon-editing", name: "Video Editing Workshop", date: "Thursday • 4:00 PM", location: "Computer Lab 2", timing: "4:00 PM - 6:00 PM", description: "Hands-on masterclass in timeline editing, audio syncing, speed ramping, and cinematic color grading." }
        ],
        coordinator: { name: "Karthik Menon", role: "Cinematic Society Director", photo: "" },
        team: [
            { name: "Simran Kaur", role: "Head of Still Photography", photo: "" },
            { name: "Rishabh Jain", role: "Post-Production & VFX Lead", photo: "" },
            { name: "Aanya Gupta", role: "Screenwriting & Direction Lead", photo: "" }
        ]
    }
};

const params = new URLSearchParams(window.location.search);
const clubId = (params.get("club") || "").toLowerCase().trim();
const club = clubInformation[clubId];
const detailsContainer = document.getElementById("clubDetails");

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    }[character]));
}

function createPersonCard(person, isCoordinator = false) {
    const initials = person.name.split(" ").map(part => part[0]).join("").slice(0, 2);
    const photoContent = person.photo
        ? `<img src="${escapeHTML(person.photo)}" alt="${escapeHTML(person.name)}">`
        : escapeHTML(initials);
    const badge = isCoordinator 
        ? `<span class="person-role-tag coordinator-tag">★ Society Coordinator</span>`
        : `<span class="person-role-tag team-tag">Core Team</span>`;

    return `
        <article class="person-card ${isCoordinator ? "coordinator-highlight-card" : ""}">
            ${badge}
            <div class="person-photo">${photoContent}</div>
            <h3>${escapeHTML(person.name)}</h3>
            <p>${escapeHTML(person.role)}</p>
        </article>
    `;
}

function createEventCard(event) {
    return `
        <article class="event-card club-event-card">
            <p class="event-label">UPCOMING EVENT</p>
            <h3>${escapeHTML(event.name)}</h3>
            <p class="event-desc">${escapeHTML(event.description)}</p>
            <div class="event-meta">
                <p><strong>Date &amp; Time:</strong> ${escapeHTML(event.date)} (${escapeHTML(event.timing)})</p>
                <p><strong>Location:</strong> ${escapeHTML(event.location)}</p>
            </div>
            <div class="event-action-row">
                <button class="button button-yellow register-event-button" type="button" data-event-id="${escapeHTML(event.id)}">Register for this event</button>
                <button class="button button-danger withdraw-event-button" type="button" data-event-id="${escapeHTML(event.id)}">Withdraw registration</button>
            </div>
            <div class="event-registration-panel" id="registration-${escapeHTML(event.id)}" hidden>
                <h4>Student details for ${escapeHTML(event.name)}</h4>
                <form class="event-registration-form" data-event-id="${escapeHTML(event.id)}">
                    <div class="form-grid">
                        <div class="form-group"><label>Full name</label><input name="name" type="text" required maxlength="80" placeholder="e.g. John Doe"></div>
                        <div class="form-group"><label>Roll number</label><input name="rollNumber" type="text" required maxlength="30" placeholder="e.g. 2025KUAD3011"></div>
                        <div class="form-group"><label>Branch</label><select name="branch" required><option value="">Select branch</option><option value="CSE">CSE</option><option value="ECE">ECE</option><option value="AI &amp; DS">AI &amp; DS</option></select></div>
                        <div class="form-group"><label>Year</label><select name="year" required><option value="">Select year</option><option value="1st Year">1st Year</option><option value="2nd Year">2nd Year</option><option value="3rd Year">3rd Year</option><option value="4th Year">4th Year</option></select></div>
                    </div>
                    <div class="form-group"><label>College email</label><input name="email" type="email" required maxlength="120" pattern="[a-zA-Z0-9._%+-]+@iiitkota\\.ac\\.in" placeholder="2025kuad3011@iiitkota.ac.in" title="Enter your IIIT Kota college email ending with @iiitkota.ac.in"><small class="field-help">Use your official IIIT Kota email ending in @iiitkota.ac.in</small></div>
                    <button class="button button-blue" type="submit">Submit registration</button>
                    <button class="button button-light cancel-registration" type="button">Cancel</button>
                    <p class="form-message" aria-live="polite"></p>
                </form>
            </div>
            <div class="withdraw-panel" id="withdraw-${escapeHTML(event.id)}" hidden>
                <h4>Withdraw from ${escapeHTML(event.name)}</h4>
                <p class="small-note">Enter the exact roll number and college email used during registration to verify cancellation.</p>
                <form class="withdraw-event-form" data-event-id="${escapeHTML(event.id)}">
                    <div class="form-group">
                        <label>Roll number</label>
                        <input name="rollNumber" type="text" required maxlength="30" placeholder="e.g. 2025KUAD3011">
                    </div>
                    <div class="form-group">
                        <label>College email</label>
                        <input name="email" type="email" required maxlength="120"
                            pattern="[a-zA-Z0-9._%+-]+@iiitkota\\.ac\\.in"
                            placeholder="2025kuad3011@iiitkota.ac.in"
                            title="Enter your IIIT Kota college email ending with @iiitkota.ac.in">
                    </div>
                    <button class="button button-danger" type="submit">Confirm withdrawal</button>
                    <button class="button button-light close-withdraw-panel" type="button">Cancel</button>
                    <p class="form-message" aria-live="polite"></p>
                </form>
            </div>
        </article>`;
}

if (!club) {
    detailsContainer.innerHTML = `
        <div class="info-card club-not-found-card">
            <h2>Club Not Found</h2>
            <p>We couldn't find the requested club. Please return to the homepage to browse all active societies.</p>
            <a class="button button-yellow" href="index.html">← Back to All Clubs</a>
        </div>
    `;
} else {
    document.title = `${club.name} | ClubSphere`;
    detailsContainer.innerHTML = `
        <div class="club-header-top">
            <a class="back-link" href="index.html">← Back to All Clubs</a>
        </div>

        <!-- 1. ENHANCED CLUB HERO BANNER -->
        <section class="club-banner">
            <div class="club-banner-content">
                <div class="club-banner-badge-row">
                    <span class="eyebrow">${escapeHTML(club.category)}</span>
                    <span class="club-pulse-tag">Active Society</span>
                </div>
                <h1>${club.icon} ${escapeHTML(club.name)}</h1>
                <p class="club-tagline">“${escapeHTML(club.tagline)}”</p>
                <div class="club-quick-stats">
                    <div class="stat-pill"><strong>4</strong> Specialized Wings</div>
                    <div class="stat-pill"><strong>${club.events.length}</strong> Upcoming Events</div>
                    <div class="stat-pill"><strong>100%</strong> Student Driven</div>
                </div>
            </div>
        </section>

        <!-- 2. REARRANGED CORE NARRATIVE: ABOUT + WHAT WE DO -->
        <div class="club-narrative-grid">
            <!-- Left Column: About the Club -->
            <section class="club-section club-narrative-card">
                <div class="section-badge-title">
                    <span class="section-icon">📖</span>
                    <h2>About the Club</h2>
                </div>
                <div class="info-card narrative-body">
                    <p class="lead-text">${escapeHTML(club.aboutLead)}</p>
                    ${club.aboutDetails.map(p => `<p class="narrative-p">${escapeHTML(p)}</p>`).join("")}

                    <h4 class="sub-section-title">Specialized Wings &amp; Domains</h4>
                    <div class="wings-grid">
                        ${club.wings.map(wing => `
                            <div class="wing-card">
                                <span class="wing-icon">${wing.icon}</span>
                                <div class="wing-text">
                                    <strong>${escapeHTML(wing.title)}</strong>
                                    <p>${escapeHTML(wing.desc)}</p>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </section>

            <!-- Right Column: What the Club Does -->
            <section class="club-section club-narrative-card">
                <div class="section-badge-title">
                    <span class="section-icon">⚡</span>
                    <h2>What the Club Does</h2>
                </div>
                <div class="info-card narrative-body">
                    <p class="lead-text">${escapeHTML(club.whatWeDoTitle)}</p>
                    <p class="narrative-p">${escapeHTML(club.whatWeDoIntro)}</p>

                    <div class="activities-list">
                        ${club.activities.map((act, idx) => `
                            <div class="activity-item">
                                <div class="activity-number">${idx + 1}</div>
                                <div class="activity-content">
                                    <h4>${escapeHTML(act.title)}</h4>
                                    <p>${escapeHTML(act.desc)}</p>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </section>
        </div>

        <!-- 3. UPCOMING EVENTS & REGISTRATION -->
        <section class="club-section events-highlight-section">
            <div class="section-badge-title center-title">
                <span class="section-icon">📅</span>
                <h2>Upcoming Events &amp; Registration</h2>
                <p class="section-sub">Select an event below to open its registration form. Use your official IIIT Kota student email (@iiitkota.ac.in).</p>
            </div>
            <div class="club-events-grid">
                ${club.events.map(createEventCard).join("")}
            </div>
        </section>

        <!-- 4. LEADERSHIP & CORE TEAM -->
        <section class="club-section">
            <div class="section-badge-title">
                <span class="section-icon">👥</span>
                <h2>Society Leadership &amp; Core Team</h2>
            </div>
            <div class="people-grid-enhanced">
                ${createPersonCard(club.coordinator, true)}
                ${club.team.map(member => createPersonCard(member, false)).join("")}
            </div>
        </section>

        <!-- 5. COORDINATOR ROSTER & ADMINISTRATION -->
        <section class="club-section coordinator-section">
            <div class="section-badge-title">
                <span class="section-icon">🔐</span>
                <h2>Coordinator Access: Event Attendee Roster</h2>
            </div>
            <div class="info-card admin-panel-card">
                <p class="admin-panel-desc">Club coordinators can enter their private administrative key to view the live registered student roster for any event.</p>
                <div class="admin-row">
                    <input class="admin-key-input" id="adminKey" type="password" placeholder="Enter coordinator admin key">
                    <select id="attendeeEventSelect" class="admin-key-input">
                        ${club.events.map(event => `<option value="${escapeHTML(event.id)}">${escapeHTML(event.name)}</option>`).join("")}
                    </select>
                    <button class="button button-blue" id="viewAttendeesButton" type="button">View attendees</button>
                </div>
                <p class="small-note">The coordinator key is managed on the server. Attendees are filtered per event.</p>
                <div id="attendeesResult"></div>
            </div>
        </section>
    `;

    // Open the registration form inside the event card when its button is clicked.
    document.querySelectorAll(".register-event-button").forEach(button => {
        button.addEventListener("click", () => {
            const eventId = button.dataset.eventId;
            const regPanel = document.getElementById(`registration-${eventId}`);
            const withdrawPanel = document.getElementById(`withdraw-${eventId}`);
            const withdrawButton = document.querySelector(`.withdraw-event-button[data-event-id="${eventId}"]`);

            // If withdraw panel is open, close it
            if (withdrawPanel && !withdrawPanel.hidden) {
                withdrawPanel.hidden = true;
                if (withdrawButton) withdrawButton.textContent = "Withdraw registration";
            }

            regPanel.hidden = !regPanel.hidden;
            button.textContent = regPanel.hidden ? "Register for this event" : "Hide registration form";
        });
    });

    document.querySelectorAll(".cancel-registration").forEach(button => {
        button.addEventListener("click", () => {
            const form = button.closest("form");
            const panel = button.closest(".event-registration-panel");
            panel.hidden = true;
            const eventId = panel.id.replace("registration-", "");
            const toggleButton = document.querySelector(`.register-event-button[data-event-id="${eventId}"]`);
            if (toggleButton) toggleButton.textContent = "Register for this event";
            form.reset();
            const message = form.querySelector(".form-message");
            if (message) {
                message.textContent = "";
                message.className = "form-message";
            }
        });
    });

    // Open the event-specific withdrawal form.
    document.querySelectorAll(".withdraw-event-button").forEach(button => {
        button.addEventListener("click", () => {
            const eventId = button.dataset.eventId;
            const withdrawPanel = document.getElementById(`withdraw-${eventId}`);
            const regPanel = document.getElementById(`registration-${eventId}`);
            const regButton = document.querySelector(`.register-event-button[data-event-id="${eventId}"]`);

            // If registration panel is open, close it
            if (regPanel && !regPanel.hidden) {
                regPanel.hidden = true;
                if (regButton) regButton.textContent = "Register for this event";
            }

            withdrawPanel.hidden = !withdrawPanel.hidden;
            button.textContent = withdrawPanel.hidden ? "Withdraw registration" : "Close withdrawal";
        });
    });

    document.querySelectorAll(".close-withdraw-panel").forEach(button => {
        button.addEventListener("click", () => {
            const panel = button.closest(".withdraw-panel");
            panel.hidden = true;
            const form = panel.querySelector("form");
            if (form) form.reset();
            const message = panel.querySelector(".form-message");
            if (message) {
                message.textContent = "";
                message.className = "form-message";
            }
            const eventId = panel.id.replace("withdraw-", "");
            const toggleButton = document.querySelector(`.withdraw-event-button[data-event-id="${eventId}"]`);
            if (toggleButton) toggleButton.textContent = "Withdraw registration";
        });
    });

    // A student can withdraw only by matching the event, roll number and college email.
    document.querySelectorAll(".withdraw-event-form").forEach(form => {
        form.addEventListener("submit", async event => {
            event.preventDefault();
            const message = form.querySelector(".form-message");
            const details = Object.fromEntries(new FormData(form).entries());
            try {
                const response = await fetch(`/api/events/${form.dataset.eventId}`, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(details)
                });
                const result = await response.json();
                if (!response.ok) throw new Error(result.message || "Could not withdraw registration.");
                message.textContent = result.message;
                message.className = "form-message success-message";
                form.reset();
            } catch (error) {
                message.textContent = error.message;
                message.className = "form-message error-message";
            }
        });
    });

    // Each event form submits to that event's own API endpoint.
    document.querySelectorAll(".event-registration-form").forEach(form => {
        form.addEventListener("submit", async event => {
            event.preventDefault();
            const message = form.querySelector(".form-message");
            const student = Object.fromEntries(new FormData(form).entries());
            try {
                const response = await fetch(`/api/events/${form.dataset.eventId}`, {
                    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(student)
                });
                const result = await response.json();
                if (!response.ok) throw new Error(result.message || "Event registration failed.");
                message.textContent = result.message;
                message.className = "form-message success-message";
                form.reset();
            } catch (error) {
                message.textContent = error.message;
                message.className = "form-message error-message";
            }
        });
    });

    document.getElementById("viewAttendeesButton").addEventListener("click", async () => {
        const adminKey = (document.getElementById("adminKey").value || "").trim();
        const eventId = document.getElementById("attendeeEventSelect").value;
        const resultBox = document.getElementById("attendeesResult");
        if (!adminKey) {
            resultBox.innerHTML = '<p class="form-message error-message">Enter the coordinator admin key first.</p>';
            return;
        }
        resultBox.textContent = "Loading event registrations...";
        try {
            const response = await fetch(`/api/events/${eventId}`, { headers: { "x-admin-key": adminKey } });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message || "Could not load event registrations.");
            if (result.students.length === 0) {
                resultBox.innerHTML = "<p>No students have registered for this event yet.</p>";
                return;
            }
            const rows = result.students.map((student, index) => {
                const regDate = student.createdAt ? new Date(student.createdAt).toLocaleDateString() : "-";
                return `<tr><td>${index + 1}</td><td>${escapeHTML(student.name)}</td><td>${escapeHTML(student.rollNumber)}</td><td>${escapeHTML(student.branch)}</td><td>${escapeHTML(student.year)}</td><td>${escapeHTML(student.email)}</td><td>${escapeHTML(regDate)}</td></tr>`;
            }).join("");
            resultBox.innerHTML = `<div class="students-card"><h3>${escapeHTML(result.event)} – Registered students: ${result.count}</h3><table class="student-table"><thead><tr><th>#</th><th>Name</th><th>Roll number</th><th>Branch</th><th>Year</th><th>Email</th><th>Registered on</th></tr></thead><tbody>${rows}</tbody></table></div>`;
        } catch (error) {
            resultBox.innerHTML = `<p class="form-message error-message">${escapeHTML(error.message)}</p>`;
        }
    });
}
