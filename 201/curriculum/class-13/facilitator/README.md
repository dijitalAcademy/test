# Facilitators Guide: Local Storage and UI/UX Concepts

## Overview

In this class we introduce the concept of persisting application state with local storage. This is the only new topic that will be covered. If there is time in the end of the class, you may also introduce some basic UI/UX design rules.

### How does this topic fit?

**Where we've been**:

In the previous class students learned how to utilize a third party library in their application. They learned to use the `<canvas>` element to display their collected votes in a graph.

**What we are focusing on in this class**:

In this class students will learn about persisting data in their application with local storage.

**Where we're headed**:

In the next class students will be finishing up their Odd Duck Products application and gearing up for final projects!

## Learning Objectives

Review the detailed objectives in this class's [student-facing readme](../README.md).

## Preparation

1. Skim the readings and be prepared if students have questions.
1. Review the code demos and be sure you understand how to construct them within lecture. Review the respective markdown file for each demo.

## Lecture Outline
<!-- NOTE TO INSTRUCTOR: If you make any changes to the lecture, make matching changes into LECTURE.md -->

Refer to the [example lecture](LECTURE.md) for lecture details.

### Code Review

### Managing application state (data persistence) with local storage

- **Why**
  - We want the user of our application to be able to retain data across page refreshes and on different parts of the application.
- **What**
  - Local storage is an object that is stored in your (browser's) application files on your computer.
- **How**
  - Demonstrate for the students how to view their local storage in the browser developer tools.
  - Use the console to demonstrate how to set, get, update, and delete data from local storage.
  - Continue demonstration of local storage in the Goat Vote Tracker application.

### UI/UX

### Lab prep

- **Why**
  - Provides students with the tools to be successful with their lab.
- **What**
  - Review Lab 13 instructions in Canvas.
- **How**
  - Refer to lab notes below for additional information.

## Lab Notes

Some students will still be catching up from the previous class' build out. This lab is also on the lighter side, requiring students to add local storage to their vote tracker app. Once the functionality is in place, adding local storage should not take too long. Students will need to be mindful of when and where they are storing and retrieving data. A common mistake is forgetting to stringify or parse the data.

## What changed from previous class?

No big changes from previous class.

## What bugs, issues, or suprises have come up in the past for this class?

No big bugs or issues that come up for this class.
