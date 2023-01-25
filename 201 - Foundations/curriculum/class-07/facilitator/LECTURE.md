<!-- NOTE TO INSTRUCTOR: If you make any changes to the lecture, make matching changes into REAMDE.md -->

### Class 7 Lecture: Object-Oriented Programming with Constructor Functions; HTML Tables
* Code Review
  * Depending on how the students worked during the previous lab, decide if it is a better use of time to code the solution from scratch or to go through one student's solution as a class

* Code Demo
  * Compare the amount of code needed to write an object literal and a constructor function. On the surface, constructors don't appear to save much time, but point out that it takes a single line to create a new instance of an object with a constructor, whereas an object literal required the same lines of code to be written out each time.
    * For example: if it takes 10 lines to make each student into an object literal, and there are 25 students in the class, that is 250 lines of code
    * However, with a 10-line constructor, the same can be accomplished in 35 lines of code
  * Take time to explain the nested nature of creating a table in JavaScript. For example, each table has children, each of which is `<tr>`, and each `<tr>` then has its own children, each of which is `<th>` or `<td>`. Run through a basic demonstration of how to append `<td>`/`<th>` elements to a `<tr>` element, then append the `<tr>` element to a `<table>` element. This will provide some basic context for the lab setup.
