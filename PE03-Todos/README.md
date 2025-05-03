Input
The React Native Todo app takes user input through a text field component. Users type the task they wish to add into this input component. When users tap the "Submit" button, the entered text is captured and validated to ensure it's not empty or whitespace. Additionally, user interactions such as marking a task as complete/incomplete or deleting tasks are captured through button presses. The app also receives input from the tab bar for filtering tasks.

Process
The main React component (App.js) manages the application's state, storing the todo items and the current filter type ("All," "Completed," or "Incomplete"). Each todo task is assigned a unique identifier and completion status. Functions such as submitTodo(), toggleComplete(), and deleteTodo() manage state changes. Filtering logic is applied based on user selection from the bottom tab bar, dynamically showing the appropriate tasks through conditional rendering.

Output
The application displays a list of todo tasks dynamically updated based on user actions. Users see newly added tasks immediately appear in the list. Completed tasks visually indicate their status, and deleted tasks vanish instantly. The bottom tab bar allows real-time filtering of displayed tasks, showing all tasks, completed tasks only, or incomplete tasks based on the user's selected filter.