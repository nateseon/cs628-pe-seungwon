Input
The program takes user input via a text field where users can enter descriptions for new tasks. The input is managed using useState, and tasks are added when the "Add Task" button is clicked.

Process
React state is used to manage the list of tasks and the task input. When a task is added, the task is pushed to the task list using the setTasks function. The tasks are displayed dynamically using .map() to render each task with a delete button. When a delete button is clicked, the handleDeleteTask function removes the selected task from the list using the .filter() method. The design is handled separately in index.css to ensure clear and manageable styling.

Output
The filtered list of tasks is dynamically rendered in App.js and styled using index.css, providing an interactive and visually organized to-do list.