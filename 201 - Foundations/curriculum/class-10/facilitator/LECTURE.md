# Lecture: JS Debugging and More CSS Layout

During lecture, continue working on the wireframe exercise together. This will help prepare students for their first timed lab assignment, Chocolate Pizza. This lab can be done individually or in assigned pairs.

There is a directory in the demo folder that contains several buggy salmon cookies projects, organized by error typ. You can use this to show the students specific errors or create your own bugs.

Debugging Workflow:

- check browser console & resolve all error messages
  - look at file name, line number of error, and error type
- check for useful linter messages near the source of the error
- console log the value you are trying to work with
- note all of the places in your code that define or modify the value you are working with
- try commenting things out, then adding them back. work backward until you find the first source of error
- try calling functions or inspecting vars in console
  - is the value named correctly?
  - is the value defined?
  - is the value the right type?
  - does the object have the props/methods you expect?
  - does the function return the value(s) it should?
  - are you calling the function with the right number/type of arguments?
  - does the array have the number/type of elements you expect?
- inspect the HTML elements
  - do all the elements exist in the HTML?
  - is the HTML hierarchy correct?
  - does the element actually have an event listener attached?
  - does the element have all the attributes you expect?
  - have you mixed up a class & an ID?
