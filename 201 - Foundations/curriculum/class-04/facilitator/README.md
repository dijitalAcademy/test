# Facilitators Guide: JS Functions, Pair Programming, and Intro to CSS Layout

## Overview

### How does this topic fit?

**Where we've been**:

In the previous class, students learned more about control flow with the introduced to loops. They learned about the CSS box model.

**What are we focusing on in this class**:

In this class we will introduce CSS positioning, functions, and pair programming. This is a rather heavy class with content so keep an eye on your time management as you work through the lecture content.

**Where we're headed**:

Next class will focus more on functions and their return statement. Students will also be closing out on their "About Me" lab.  Three labs assignments are due consisting of deploying the "About Me" project, CSS practice, and Git branching.

## Learning Objectives

Review the detailed objectives in this class's [student-facing readme](../README.md).

## Preparation

1. Skim the class reading and be prepared if students have questions.
1. Review the code demos and be sure to understand how to construct them within lecture. Review the respective markdown file for each demo.
1. The instructional staff should have a solid feel for the students who are starting to get overwhelmed and who might be at risk of not completing the course. 
   - ***It is important to make an opportunity to spend time with these students of concern, to help them along and also more closely evaluate where they are.***

## Lecture Outline
<!-- NOTE TO INSTRUCTOR: If you make any changes to the lecture, make matching changes into LECTURE.md -->

Refer to the [example lecture](LECTURE.md) for lecture details.

### Code review

- Review Truthy/Falsy
- Review Arrays
- Review Loops

### JS functions

- **Why**
  - Functions are one of the fundamental building blocks in JavaScript.
  - Functions can be reusable and help save time.
- **What**
  - A function is a set of statements that perform a task or calculates a value. It should take some input and return an output.
  - To use a function, you must define it and then call it.
- **How**
  - Instructor may choose to use replit for the demonstration.
  - Demonstrate how to declare and call a variety of functions:
    - functions without parameters
    - functions with parameters and then called with arguments
    - functions with a return statment
    - saving the value returned from the function to a variable
  - Touch on function scope with a few examples.

### CSS layout - Positioning

- **Why**
  - A few benefits for using CSS for layout:
    - Maintainability - it is easier to make changes when your layout is described in CSS.
    - Better accessibility - organizing your document based on its content helps those with screen readers.
- **What**
  - Positioning allows you to take elements out of the normal document flow layout flow and make them behave differently.
  - Few examples to demonstrate is having an element sit on top of one another or by having an element remain in the same place inside the viewport.
- **How**
  - Use Code Pen for this demonstration so that it can be shared to the class repository.
  - Demonstrate the following position values to the students:
    - Absolute
    - Relative
    - Fixed

### Pair Programming

- **Why**
  - A few benefits to pair programming:
    - Two heads are better than one!
    - An effective way to share knowledge.
    - Develops interpersonal skills.
    - Helps to develop higher quality code faster while reducing risk.
- **What**
  - Pair programming is an agile software development technique in which two programmers work together at one workstation.
- **How**
  - Define the roles of Navigator and Driver.
  - Demonstration how to plan an approach before starting code.
  - Encourage communication while coding.
  - If available, pair program something with a TA or a fellow instructor.

### Lab prep

- **Why**
  - Provides students with the tools to be successful with their lab.
- **What**
  - Review Lab 04 instructions in Canvas.
- **How**
  - This lab is going to focused mainly on pair programming.
  - Whiteboard the git flow that will take place during pair programming:
    - Forking, cloning, ACP, making a Pull Request, and then merging.
  - Grab a TA, another instructor, or possibly a student volunteer as a backup to help with this demonstration.
    - Refer to the [lecture example](LECTURE-EXAMPLE.md) for a more detailed example of what needs to be accomplished during the students pair programming lab.

## Lab Notes

This class's lab requires pair programming. Be sure to review with the students what the different roles are and how they work together to collaborate to accomplish the given goal.

- Students should be paired with similarly skilled students. 
  - e.g. If you rank your students on a scale from 1-10 based on overall ability, avoid pairing a 4 with a 10. Pair a 0 with no higher than a 5, and pair a 10 with no lower than a 6.
- Use groups of 3 as needed, especially on teams where you suspect someone might not show up. This is more an issue with the night schedule where this assignment is done over consecutive evenings.
- Announce partners over the slack channel, not in class. 
  - This way there is no drama with facial expressions over Zoom when people learn who their partner is.

It can be helpful to expose students to [learnlayout.com](http://learnlayout.com) as an introduction to CSS layouts.

[This article from freecodecamp.org](https://medium.freecodecamp.org/css-floats-explained-by-riding-an-escalator-57fa55232333) is also a great resource for students to understand how floats work in CSS.

## What changed from previous class?

Students will be learning new Git and GitHub workflows that may be a bit of a struggle.

## What bugs, issues, or surprises have come up in the past for this class?

Each of the two big topics brings challenges. With functions, students tend to want to make them much more complicated than they are, instead of simply being a wrapper around logic that they have already demonstrated the ability to manage. Plus, there is typically a lot of confusion with fundamentals of how parameters and arguments work, the difference between declaring and calling a function, and the use of ‘return’ statements. Experience shows that probably 50% or more of students actually know very little of how functions work… and that is before bringing the concept of ‘scope’ into the discussion. In addition, most students have seen and tend to haphazardly use function declarations and function expressions, and care needs to be taken to guide them (for now) down the declaration path, without getting sucked into the rabbit holes of hoisting and JS interpreter behavior if the students generally are struggling with the basics.

With CSS layout, there is an enormous range of possibilities that is impossible to manage without command of a handful of fundamental concepts; yet, it takes more work than expected to get the basic concepts across effectively. Students are used to thinking of formatting in word processing documents, and the ease of just highlighting and clicking options until the desired look is achieved. With the interaction of CSS and HTML, care must be given to planning and organization of a document within the constraints of the fundamental CSS layout concepts. This points to the need to have a plan in place before building, since structure and detail are so interlinked. Command of terminology is key, and this is another important place to stress the role of solid communication skills.

On top of all of this, this class is their first experience in pair programming, so there are numerous technical and social/communication aspects to consider. Do not underestimate the time needed to demonstrate Git flow to the class. Expect a long lab, and stress the importance of time management.
