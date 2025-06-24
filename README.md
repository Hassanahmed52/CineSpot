CineSpot/
│
├── backend/
│   ├── config/
│   │   └── db.js                # PostgreSQL connection setup
│   │
│   ├── controllers/
│   │   ├── authController.js    # Login/signup/logout logic
│   │   ├── roomController.js    # Room creation/join/leave logic
│   │   └── videoController.js   # Sync video playback logic (optional)
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js    # JWT token validation
│   │   └── errorHandler.js      # Error handling middleware
│   │
│   ├── models/
│   │   ├── userModel.js         # User model
│   │   ├── roomModel.js         # Room model
│   │   └── messageModel.js      # Chat message model
│   │
│   ├── routes/
│   │   ├── authRoutes.js        # /api/auth
│   │   ├── roomRoutes.js        # /api/rooms
│   │   └── videoRoutes.js       # /api/video (optional)
│   │
│   ├── sockets/
│   │   └── socketHandler.js     # Socket.IO or WebSocket event logic
│   │
│   ├── utils/
│   │   └── generateToken.js     # JWT generation
│   │
│   ├── .env                     # Environment variables
│   ├── server.js                # Express app & WebSocket setup
│   └── package.json
│
├── frontend/
│   ├── css/
│   │   └── input.css            # Tailwind input styles
│   │
│   ├── js/
│   │   ├── signup.js            # Signup logic
│   │   ├── login.js             # Login logic
│   │   ├── room.js              # Room logic (sync, chat)
│   │   └── socketClient.js      # WebSocket or Socket.IO client
│   │
│   ├── pages/
│   │   ├── index.html
│   │   ├── signup.html
│   │   ├── login.html
│   │   ├── room.html            # Main room interface
│   │   └── output.html
│   │
│   ├── tailwind.config.js
│   └── vite.config.js or parcel.config.js (if used)
│
├── README.md
├── .gitignore
└── package.json                # (if managing root workspace too)
