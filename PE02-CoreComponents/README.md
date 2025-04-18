Input
The program accepts user input via a TextInput component, allowing the user to enter their favorite MSCS course (e.g., “CS624”). In addition, all course information—eight core courses, two depth of study courses, and one capstone—is statically defined in the code, based on CityU’s academic catalog.

Process
This mobile app is implemented using a functional component defined with an arrow function. It uses React Native’s core components—View, Text, ScrollView, Image, TextInput, and StyleSheet—to build the layout and manage input state with useState. The app dynamically maps over arrays of course names to render them into structured sections. Styling is applied internally using StyleSheet.create().

Output
The app displays a scrollable interface showing a logo (icon.png from the ./assets folder), a prompt and input field, and a categorized list of MSCS courses. Once the user enters a course, their favorite is displayed in stylized text below the input field.