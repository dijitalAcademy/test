# Facilitators Guide: Basics of HTML,CSS, and JS

## Overview

This class is all about practice with JavaScript, an introduction to data types, conditionals, and arrays. You are also introducing the students to Git and Github at a much deeper level. Today's lab requires the students create a new repo and build their lab assignment using a very basic git workflow.

### How does this topic fit?

**Where we've been**:
In the previous class we gave the students an introduction on building out an HTML page with embedded internal and in-line CSS and JavaScript functionality.

**What are we focusing on in this class**:
In this class, we'll be learning about more JavaScript fundamentals with data types, conditionals, and arrays. Students will also be learning a new git workflow and how to structure/scaffold their projects moving forward.

**Where we're headed**:
Next class will focus on array review at a deeper level. Students will be learning all about control flow with JavaScript loops and conditional logic.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

1. Skim the daily readings and be prepared if students have questions.
1. Review the code demos and be sure to understand how to construct them within lecture. Review the respective markdown file for each demo.
1. Be prepared to introduce code review and why it's important. A simple online search engine query of "Why code review" should produce some results as a starting point.

## Lecture Outline
<!-- NOTE TO INSTRUCTOR: If you make any changes to the lecture, make matching changes into LECTURE.md -->

Refer to the [example lecture](LECTURE.md) for lecture details.

### Introduce New Canvas Assignment Types

- Learning Journals
- Quizzes

### Code Review

- **Why**
  - Important for students to get this exposure of code review.
    - Students should be prepared for code reviews that will happen to them once they are the industry.
    - Students can develop a thick skin, take reviews objectively, and learn from each review.
      - **Remind students that code reviews are a safe space!**
    - A fresh set of eyes can identify bugs or help to suggest how to make the code more readable.
- **What**
  - Previous day's lab assignment.
    - Ask a student to volunteer their code for review.
- **How**
  - Instructor should open the student's code in VSCode.
  - Go through code line-by-line and have a different person explain each line.
    - Ask the student meaningful questions about why the code was written that way or what it is doing.
  - Fix broken code together as a class.

### Review of HTML/CSS

- **Why**
  - It is a good review for those students that have taken the 101 or 102 course as well as for those that have tested in.
- **What**
  - HTML heading/paragraph tags
  - HTML lists (`<ol>` & `<ul>`)
  - CSS ids/classes
  - Targeting specific values
  - CSS Reset
- **How**
  - Instructor may choose to demo these concepts out in codepen.io so it can be shared with class and pushed up to the class repository.

### JavaScript

- **Why**
  - Good introduction to fundamentals in JavaScript that will continue to build as the labs progress.
- **What**
  - Cover the following data types:
    - Strings(could be a review from the previous lab)
    - Booleans
    - Numbers
  - Conditionals
  - Arrays
- **How**
  - Instructor may choose to use a tool like [Repl.it](https://replit.com) which could then be shared with the class or pushed up to the class repository.
  - Data type can be verbal review or can be demonstrated by using the `typeof` operator.
  - Demonstration of `if/else` statements.
  - Introduce logical operators and equality.
  - Demonstration of Arrays.

### Git vs GitHub

- **Why**
  - Important for students to understand the difference between git and GitHub.
  - Students will be learning the *a-c-p* git workflow that will be needed for their lab assignments.
- **What**
  - Git: Version Control(VCS) - on our local machine to track changes to our projects through a series of commits and branches.
  - GitHub: A website - "the cloud" that stores our code so that we can share/collaborate amongst teams.
- **How**
  - Can use [whiteboard diagram](whiteboard-diagrams/git-vs-github.png).
    - Discuss the difference between git and GitHub.
    - Explain the git workflow students will be using: *a-c-p*.
  - Go to GitHub, show students how to create a repo and clone it down to their 201 project folder on their machine.
  - Walkthrough project setup and file scaffolding:
    - Add directories/files from command line to refresh student on concepts learned yesterday.

### Lab Review

- **Why**
  - Provides the students the tools to be success with their lab.
- **What**
  - Review lab 02 instructions, and again talk about the new file structure/scaffolding.
- **How**
  - Demonstrate how to link up the separate CSS files, as well as the Javascript file.
  - Walk through lab instructions.
  - Demo one example of the new prompt quiz question and validating user input.

## Lab Notes

The "walk through" with GitHub is intended to prepare the students with a start on their lab. Make sure everyone has a repo cloned on their local machines and have done an a-c-p workflow at least once.

## What changed from previous class?

Students will be introduced to putting their CSS in a external file as well as their JavaScript.

## What bugs, issues, or surprises have come up in the past for this class?

GitHub SSH keys and HTTP tokens.

- **Helpful GitHub docs to provide to students**
  - [Generating SSH Key - GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
  - [Creating a personal access token - GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## General Comments

This first code review session is especially important, since it will be the first time for students to view each others’ code. For some students, the thought of showing their code to anyone else, much less an entire class, is nerve-wracking—so be especially patient, sensitive, and empathetic. Again, be attentive to their code’s syntax and style. Encourage students to read and explain their code to the class. You can even ask students to read and explain the code of their peers. This provides students an early opportunity to practice reading code and helps them truly understand the importance of proper syntax and style as it relates to sharing code.

**Important reminder on Lab 05c**: This is an assignment on practicing CSS selectors that needs to be published at the end of Class 2. We publish this early for the students so that they can take a few days to complete these tutorials as fits in to their workflow. The lab is labeled as 05c because it should be due at the same time as Lab 05a and Lab 05b. **Do not forget to scroll down to Class 5 to publish this lab in Canvas.**
