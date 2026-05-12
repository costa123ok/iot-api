 # IoT REST API

A professional REST API for IoT Device Management built with Node.js, Express, and MongoDB.

## Tech Stack
- Node.js + Express
- MongoDB Atlas + Mongoose
- JWT Authentication
- Joi Validation
- Multer (File Upload)
- Swagger (API Documentation)
- Jest + Supertest (Unit Tests)

## Project Structure
src/
├── config/       # Database connection
├── models/       # Mongoose models
├── routes/       # API routes
├── controllers/  # Request handlers
├── services/     # Business logic
├── middlewares/  # Auth & validation
├── validations/  # Joi schemas
└── uploads/      # Uploaded images

## Setup

1. Clone the repository
```bash
git clone <your-repo-url>
cd iot-api
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4. Run the server
```bash
npm run dev
```

## API Documentation
Visit `http://localhost:5000/api-docs` for full Swagger documentation.

## Resources
- **Users** — Authentication with JWT
- **Devices** — IoT device management with image upload
- **Sensors** — Sensors linked to devices
- **Messages** — Real-time sensor data linked to devices and sensors

## Features
- JWT Authentication
- Full CRUD for all resources
- Advanced filters and pagination
- File upload for device images
- Input validation with Joi
- Unit tests with Jest

## Testing
```bash
npm test
```

## API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login and get token |

### Devices
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/devices | Create a device |
| GET | /api/devices | Get all devices |
| GET | /api/devices/:id | Get device by ID |
| PUT | /api/devices/:id | Update a device |
| DELETE | /api/devices/:id | Delete a device |

### Sensors
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/sensors | Create a sensor |
| GET | /api/sensors | Get all sensors |
| GET | /api/sensors/:id | Get sensor by ID |
| PUT | /api/sensors/:id | Update a sensor |
| DELETE | /api/sensors/:id | Delete a sensor |

### Messages
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/messages | Create a message |
| GET | /api/messages | Get all messages |
| GET | /api/messages/:id | Get message by ID |
| PUT | /api/messages/:id | Update a message |
| DELETE | /api/messages/:id | Delete a message 
