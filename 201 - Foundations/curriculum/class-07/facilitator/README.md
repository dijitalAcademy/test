# Facilitators Guide: Object-Oriented Programming with Constructor Functions and HTML Tables

## Overview

This is the first of the two toughest classes in the course. Introducing inheritance with constructor functions, plus adding another dimension to dynamic DOM rendering by creating a table instead of lists from stored array data, is often a bigger bite than most students can completely chew on one day, especially if there were any issues lingering from Class 6.

### How does this topic fit?

**Where we've been**:
In the previous class students were introduced to object literals and DOM manipulation.

**What are we focusing on in this class**:
In this class, we'll be learning about Constructor functions and more on DOM manipulation. Students will be creating a Constructor function to instanciate stores and refactor their unordered list into an HTML table.

**Where we're headed**:
Next class will focus on CSS layouts with an introduction to wireframe a page. Students will also dive more into 2D Arrays and nested loops.

## Learning Objectives

Review the detailed objectives in this class's [student-facing readme](../README.md).

## Preparation

1. Skim the class readings and be prepared if students have questions.
1. Review the code demos and be sure to understand how to construct them within lecture. Review the respective markdown file for each demo.

## Lecture Outline
<!-- NOTE TO INSTRUCTOR: If you make any changes to the lecture, make matching changes into LECTURE.md -->

Refer to the [example lecture](LECTURE.md) for lecture details.

### Code review

### Constructor functions

- **Why**
  - Instructors are used to initialize objects with the default or initial state.
- **What**
  - A constructor is a function used to create object instances.
- **How**
  - Use a tool like Replit or VSCode to demo constructors.
  - Breakdown the anatomy of a constructor and how the syntax differs from object literals.
  - Explain how the term `this` differs with constructors.

### Prototypes

- **Why**
  - With prototypes, the objects created by the constructor function will inherit methods and properties.
- **What**
  - A method that will be available to all objects instanciated by the constructor function.
- **How**
  - Demonstrate the difference between adding a method to a created object vs a prototype method to the constructor.

### HTML tables

- **Why**
  - Tables are a great way to render data to the page.
- **What**
  - HTML tables consist of the `<table>` element and one or more `<tr>`, `<th>`, and `<td>` elements.
- **How**
  - Demonstrate a quick table add in the HTML file.
  - Then demonstrate how the students will need to render their tables for lab using JavaScript.

### Lab prep

- **Why**
  - Provides students with the tools to be successful with their lab.
- **What**
  - Review Lab 07 instructions in Canvas.
- **How**
  - Refer to the lab notes below.

## Lab Notes

For this lab, students will be refactoring all of their object literals for the cookie stores into a single constructor function with multiple instances. The second component of this lab is to convert their list elements from the previous lab's work into a table that is dynamically rendered to the DOM from their JavaScript file.

All of the methods for the constructor function should be inherited using its `.prototype` property.

Encourage students to approach this lab one step and a time and outline what they plan to do prior to writing the code. Also encourage students to write out the functionality the long way first to make it work, then refactor into for loops, functions, etc.

Some common pitfalls for this lab include appending children to parents in the incorrect order, misuse of `this`, and figuring out how to access the data in each individual object. Prepare for a more detailed code review in the next class.

## What changed from previous class?

Students will be refactoring their previous lab and switching from object literals to Constructor functions.

## What bugs, issues, or suprises have come up in the past for this class?

Students will be creating feature branches for each day's lab. Watch for students running into git issues.
