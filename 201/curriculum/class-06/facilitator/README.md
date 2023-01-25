# Facilitators Guide: The DOM and Introduction to Objects

## Overview

This is the kickoff of a new project. Over the next 4 labs, students will incrementally build out an application that utilizes and manipulates the DOM. In this class, we are introducing these new concepts and kicking off Salmon Cookies.

### How does this topic fit?

**Where we've been**:
In the previous class we closed out the first week's project. Students dived deeper into functions and their return statement, CSS styling, and a new git workflow with creating feature branches.

**What are we focusing on in this class**:
In this class, we'll be starting a new project. Students are going to be learning about object literals and manipulating the DOM.

**Where we're headed**:
Next class will focus on refactoring our code and removing all the object literals and creating a Constructor function. Students will also be learning about HTML tables and more DOM manipulation.

## Learning Objectives

Review the detailed objectives in this class's [student-facing readme](../README.md).

## Preparation

1. Skim the class readings and be prepared if students have questions.
1. Review the code demos and be sure you know how to construct them within lecture. Review the respective markdown file for each demo.
1. Upload to your class repo in GitHub a lab folder that contains the `assets` folder located in the `lab` folder of this day. The students will need this data to complete their lab.
1. Announce to the students that you will start 1-on-1 syncs with each student. Refer to the "General Comments" below for more information on what the syncs will consist of.

## Lecture Outline
<!-- NOTE TO INSTRUCTOR: If you make any changes to the lecture, make matching changes into LECTURE.md -->

Refer to the [example lecture](LECTURE.md) for lecture details.

### Code review

### Object literal notation

- **Why**
  - JavaScript objects are convenient & powerful ways to group data and functions.
- **What**
  - Objects store data as **properties**, which are represented as `key: value` pairs, and can have **methods**, which are functions associated with the object.
- **How**
  - Write out an object literal in Replit or text editor.
    - Break down the syntax.
    - Show how it appears in the console.
  - Demonstrate how to access value of proptery using dot notation and bracket notation.
  - Demonstrate adding a new property to the object from outside of the object.
  - Demonstrate adding a method to the object.
  - Talk about the term `this` when referring to object literals.

### The DOM & DOM manipulation

- **Why**
  - DOM manipulation is used to change the document structure, style, and content.
- **What**
  - Document Object Model - represents the HTML and CSS coming together to create a document that we use in our browsers.
- **How**
  - Use this as lab prep and in class demo purposes.
  - Build out basic HTML structure but give yourself a starting `section` element with a specified `id`.
  - Create your object literals and fill out necessary information.
  - Demonstrate the 4 step process on DOM manipulation:
    - Get the section from HTML with specified id from the DOM that is to be modified.
    - Create an element.
    - Give it content.
    - Append it to the parent or DOM element.

### Lab prep

## Lab Notes

Like the About Me project, this new lab project will be progressively enhanced across multiple labs. For this lab, students are only permitted to use object literal notation, NO constructors. There will likely be students who want to use constructors, so make sure they wait until lab 7 to do so.

This is the first exposure to problem domains and having to build something from specific specs and sample data. Take time to walk through the problem domain as a class and highlight specific items to pay attention to. For example, they are given a few pieces of data but need to come up with the logic for the other technical requirements.

Differentiate between the content of each HTML file. The `index.html` page should be thought of as the customer-facing page containing the store locations, hours, branding, fonts, etc. The `sales.html` page should be thought of as the admin-facing page. For this lab, that page will hold a list of the projected sales per hour. In the following lab, that data will be converted to a table. In the lab for Class 8, they will also add a form to this page for the admin to add new stores to the table.

Remind students that user stories give some requirements. They should read both the problem domain and the user stories carefully to determine the requirements for the lab.

This is a big lab, so encourage students to take it one piece at a time. Also encourage students to retype every object rather than copying and pasting code from one object to another. It is tempting to copy and paste in the interest of time, but the more they can type the code, the faster they'll build up muscle memory through repetition.

## What changed from previous class?

Students are starting a new project this week.

### What bugs, issues, or surprises have come up in the past for this class?

This class' content and lab might be a make or break for a lot of students. Prepare for a lot of self-doubt to bubble up during upcoming 1-on-1 meetings.

## General Comments

Sample flow of a one-on-one meeting:

1. "How's it going in the class?"
1. "Here's what I am seeing..." (Pull up the gradebook to check student progress, and the student's survey response in Survey Monkey to address anything there)
1. "Let's review your self-assessment that you've completed already..."
1. "Is there anything you want to talk about, or do you have any questions for me?"
1. "Since we have a few minutes, let's talk about whiteboarding and do a sample whiteboard problem."

We have found that regular one-on-one meetings with students have beneficial outcomes in student/instructor relationships, monitoring student progress, answering student questions, starting students with some basic whiteboard practice, and overall increase of student success and student satisfaction.

### Review of Career Coaching Assignments

Briefly discuss the upcoming Career Coaching assignments:

Targeted Job Search: Students will begin to research companies and start a spreadsheet to keep track as they perform their research. Remind students to submit this assignment as a Google document with sharing access granted so the instructional staff can view and grade the assignment.
