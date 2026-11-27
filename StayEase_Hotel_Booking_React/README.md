# StayEase - React Hotel Booking Frontend

StayEase is a frontend-only hotel booking demo built with React and Vite.

## Requirements

- Node.js (LTS version recommended)
- Visual Studio Code (recommended)

## Run the project

1. Extract the ZIP file.
2. Open the `StayEase_Hotel_Booking_React` folder in VS Code (the folder containing `package.json`).
3. Open **Terminal → New Terminal**.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL printed in the terminal (usually `http://localhost:5173/`).

## Other commands

```bash
npm run build
npm run preview
```

## Features

- Search hotels by destination.
- Filter by city, maximum price, rating and amenities.
- 40 illustrative hotel listings across 20 Indian cities.
- Standard, Deluxe and Executive Suite room categories with sample prices and guest capacities.
- Hotel details popup showing room categories and amenities.
- Demo user registration and login.
- Persistent demo login session using browser Local Storage.
- Booking requires a logged-in user.
- Booking details, room, dates, guest count, amount and reference number are saved in Local Storage.
- My Bookings section displays only the signed-in user's bookings.
- Users can cancel confirmed bookings after a confirmation prompt; the cancelled status and timestamp are saved in Local Storage.
- Bookings remain available after a page refresh and after logging out and back in on the same browser.
- Admin dashboard displays recent demo bookings.

## Local Storage keys

- `stayeaseAccounts`: demo account records and password hashes.
- `stayeaseUser`: the currently signed-in user's session profile.
- `stayeaseBookings`: saved booking records, associated with a user ID and email.

## Important security limitation

This is an academic frontend demonstration, not production authentication. User accounts and bookings are stored in the browser and can be viewed or modified by someone with access to that browser. The demo hashes passwords in the browser so they are not stored as plain text, but client-side hashing does not make authentication secure. Do not use a real password or sensitive personal information. A production application needs server-side authentication, securely hashed passwords on the server, database storage and authorization checks on the backend. No real payment is processed.
