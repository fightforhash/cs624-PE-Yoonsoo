# Input
Users interact with the app by exploring or adding information about cities, countries, and their currencies. Input is primarily managed through intuitive UI elements such as forms, buttons, and navigation tabs. The app leverages React Context (`CountryContext`) to collect and store user-provided data, ensuring that new country and currency entries are dynamically reflected throughout the app.

# Process
The core logic processes user input by updating the application's state using React's `useState` and Context API. When a user adds a new country or currency, the app updates the shared context, making the data accessible across different screens. The app also utilizes file-based routing and modular components to efficiently manage navigation and UI rendering, ensuring a responsive and seamless user experience.

# Output
Processed data is displayed in real-time across relevant screens, such as lists of countries and their currencies. The output includes dynamic UI updates, visual feedback, and confirmation of user actions. The app supports both light and dark modes, providing a modern and accessible interface for users to view and interact with the information they have entered or explored. 