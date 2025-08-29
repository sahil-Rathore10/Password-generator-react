🔑 Password Generator (React)

A simple and customizable password generator built with React.
It allows you to generate strong random passwords with custom length, numbers, and special characters.
You can also copy the generated password directly to your clipboard with one click.

🚀 Features

Generate random secure passwords.

Control password length (6 to 100 characters).

Toggle numbers and special characters on/off.

Copy to clipboard functionality.

Fully responsive and styled with Tailwind CSS.

📸 Preview

🛠️ Tech Stack

React (useState, useEffect, useCallback, useRef hooks)

Tailwind CSS for styling

📂 Installation & Setup

Clone this repository:

git clone https://github.com/sahil-Rathore10/Password-generator-react
cd password-generator


Install dependencies:

npm install


Run the project locally:

npm run dev


Project will run on http://localhost:5173/ (if using Vite).

⚡ Usage

Open the app in your browser.

Adjust the length slider to set password length.

Check/uncheck Numbers and Characters options.

A new password will be generated automatically.

Click the Copy button to copy the password to clipboard.

📚 React Hooks Used

useState → Manage states like password length, toggles, and generated password.

useEffect → Regenerate password when dependencies change.

🖊️ Example Code Snippet
<input 
  type="range"
  min={6}
  max={100}
  value={length}
  className="cursor-pointer"
  onChange={(e) => setLength(e.target.value)}
/>
<label>Length: {length}</label>

📌 Future Improvements

Add strength meter (Weak / Medium / Strong).

Dark/Light mode toggle.

Allow users to choose specific character sets.

👨‍💻 Author

Developed by Sahil Rathore ✨
📧 Feel free to connect with me on https://www.linkedin.com/in/sahil-rathore-5a555a203/
.


useCallback → Optimize functions like passwordGenerator & copyPasswordToClipboard.

useRef → Reference the password input field for clipboard copying.



