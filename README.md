# Charik Fullstack Technical Assessment

This project is a fullstack application that integrates with HubSpot's private app features, allowing users to manage and link deals and contacts seamlessly through a CRM interface.

## Features
1. **User Authentication**: Login and register functionality.
2. **Contact and Deal Management**:
    - Display lists of contacts and deals.
    - Filter contacts and deals by name.
3. **Linking**:
    - Link multiple deals to a contact or vice versa.
    - Bulk selection for efficient linking.
4. **Integration with HubSpot**:
    - Fetch contacts and deals via HubSpot API.
    - Perform linking operations using HubSpot API endpoints.

---

## Technologies Used
### Backend
- Python 3
- Django REST Framework
- HubSpot API

### Frontend
- React.js
- State Management (React useState and useEffect)

---

## Installation Instructions

### Prerequisites
- Python 3 installed on your machine.
- Node.js and npm installed.

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/charik-assessment.git
    cd charik-assessment
    ```
2. Navigate to the backend directory and create a virtual environment:
    ```bash
    cd backend
    python3 -m venv env
    source env/bin/activate  # On Windows: env\Scripts\activate
    ```
3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Set up your HubSpot API key:
    In the backend directory, create a `.env` file:
    ```env
    HUBSPOT_API_KEY=your_hubspot_api_key
    ```
5. Run the Django server:
    ```bash
    python manage.py migrate
    python manage.py runserver
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the React development server:
    ```bash
    npm start
    ```

---

## Project Structure

### Backend
- `views.py`: Contains API views for fetching contacts, deals, and linking.
- `urls.py`: Maps API endpoints.
- `.env`: Stores sensitive API keys and configuration.

### Frontend
- `src/components`: Contains React components like Login, Register, Home, and Table.
- `src/api`: Manages API calls to the backend.

---

## How to Use

### Set Up a HubSpot Private App:
1. Go to HubSpot's Developer Portal.
2. Create a private app with the necessary permissions for contacts and deals.
3. Generate an API key and set it in your `.env` file.

### Run the Application:
1. Start both the backend and frontend servers.
2. Navigate to `http://localhost:3000` in your browser.

### Features:
- Log in or register to access the app.
- View, filter, and link contacts and deals.
- Use the bulk linking feature for efficiency.

---

## Deployment
- **Backend**: Deploy on platforms like Heroku, DigitalOcean, or AWS.
- **Frontend**: Deploy on Vercel or Netlify.

---

## Known Issues
- Ensure your API key has the correct permissions.
- Use ngrok if testing locally with HubSpot requires public access to the API.

---

## Author
- **Your Name**
- **Email**: your-email@example.com
- **GitHub**: [Your GitHub Profile](https://github.com/your-username)

---

## Demo Video
[View Demo](your-demo-link)

Replace placeholders like `your-username`, `your-email`, and `your-demo-link` with actual values. Let me know if you'd like further refinements!
### Frontend Setup with Vite
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the Vite development server:
    ```bash
    npm run dev
    ```

---

## View the Website
You can view the website via the following link:
[View Website](https://drive.google.com/file/d/15slA1NUJmHMTca3h0-ovMPgxvrY7iChc/view?usp=sharing)