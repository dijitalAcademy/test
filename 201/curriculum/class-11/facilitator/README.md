# Facilitators Guide: A/V, Practical Info, and Getting the Vote Tracker Started

## Overview

There are two main parts to this class:

First, provide a little discussion time on a couple of auxiliary topics, including the use of audio/visual resources in a web document, as well as SEO, analytics, and site hosting.

Second, get the students started on the next code project, which is a vote tracker. It’s also more OOP. The goal for the end of lab is for students to display some number of random images from a collection, and keep track of which images were displayed and how often each image was clicked. This involves creating a set of picture objects from a constructor function that each have a name, a file path, times shown, and times clicked properties, and maybe others depending on the specifics of the project.

At the end of this lab, students should be able to render a list of image names to the DOM along with the number of votes each item received. In the following lab, this data will be funneled into a chart library and displayed graphically.

### How does this topic fit?

**Where we've been**:
In the previous class students closed out on their Salmon Cookies application. Students also learned more about debugging practices.

**What are we focusing on in this class**:
In this class students are starting a new project which should help to cement concepts and features they used in their previous project. They will also be learning another CSS layout method, using Grid.

**Where we're headed**:
Next class students will learn how to bring a third party library into their application to display data in a chart.

## Learning Objectives

Review the detailed objectives in this class's [student-facing readme](../README.md).

## Preparation

1. Upload the `lab/assets` folder to your class repository. These assets are required for this class's lab.
1. Upload the `wireframe.jpg` file located in the lab folder as a suggested wireframe for the Odd Duck Products application.
1. Review the lab assignment for this class and make sure that your demo closely aligns with it's requirements.

## Lecture Outline
<!-- NOTE TO INSTRUCTOR: If you make any changes to the lecture, make matching changes into LECTURE.md -->

Refer to the [example lecture](LECTURE.md) for lecture details.

### Code Review

- Review chocolate pizza.

### Audio/Video in Web Doc

- **Why**
  - HTML5 allow us to embed video and audio into web pages.
- **What**
  - The HTML `<audio>` element is used to play an audio file on a web page.
  - The HTML `<video>` element is used to show a video on a web page.
- **How**
  - Utilize the [index.html](../demo/media-click-tracker/index.html) file to demonstrate audio and video files on a web page.

### CSS Grid

- **Why**
  - With CSS grid, we can work with rows **and** columns together, where flexbox only allowed to us to work with rows **or** columns. This allows us to build more complex and organized designs.
- **What**
  - Grid is a layout system that allows you to set up a series of row and column lines and place items within specified segments of the page based on the row/column number.
- **How**
  - Use a CodePen or VSCode to demonstrate grid.
  - Instructor may also pass on the following site to students to help them with grid practice: [CSS Grid Garden](https://cssgridgarden.com/)

### Lab Prep

- **Why**
  - Provides students with the tools to be success with their lab.
- **What**
  - Instructor will be building out a Goat Vote Tracker application using the demo outlined in the [Demo folder](../demo/).
- **How**
  - Before the build-out, review the problem domain for the Goat Vote Tracker application.
  - Have a class discussion and brainstorm what needs to go into the project.
  - Build-out the Goat Vote Tracker application and reinforce concepts students have learned from their previous project.
  - After build-out of Goat Vote Tracker, introduce Odd Duck Products.

## Lab Notes

There is a lot that goes into this class's lab, so prepare students for a large build-out. The only new concept should be changing the `src` attribute of the `img` element to a randomly-selected image. Otherwise, the concepts of event listeners, constructor functions, and modifying properties of objects should be familiar from the previous application.

## What changed from previous class?

Students are starting a new project, Odd Duck Products, with this class.

## What bugs, issues, or surprises have come up in the past for this class?

Lab 11 is large in comparison to what they're used to, and can cause stress. Remind students that this project is designed to be built incrementally during the course of the next 3 lab sessions, and that pacing is an important component to their success.
