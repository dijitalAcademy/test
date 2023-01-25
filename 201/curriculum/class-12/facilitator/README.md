# Facilitators Guide: Adding a chart to the Vote Tracker App

## Overview

The focus for this class is to utilize a 3rd party chart library so that students can provide a graphical representation of the click data that they are collecting from their vote tracker. This involves a discussion of the `<canvas>` element, which is where the chart library actually does its thing.

### How does this topic fit?

**Where we've been**:

In the previous class students kicked off their new project, Odd Duck Products. 

**What we are focusing on in this class**:

In this class students will learn how to utilize a 3rd party library in their application. They will be using the `<canvas>` element to display their collected votes in a bar graph.

**Where we're headed**:

In the next class students will learn how to persist data from their application using local storage.

## Learning Objectives

Review the detailed objectives in this class's [student-facing readme](../README.md).

## Preparation

1. Skim the readings and be prepared if students have questions.
1. Review demo code.

## Lecture Outline
<!-- NOTE TO INSTRUCTOR: If you make any changes to the lecture, make matching changes into LECTURE.md -->

Refer to the [example lecture](LECTURE.md) for lecture details.

### Code review

- Depending on the cohort, a demo of a build-out may be more appropriate.

### Canvas + ChartJS overview

- **Why**
  - Third party libraries help us save time as we do not need to develop the functionality that the library provides!
- **What**
  - The `<canvas>` element is used to draw graphics using JavaScript.
  - Chart.js is a 3rd party JavaScript library for data visualization, which supports a number of different chart types.
- **How**
  - Navigate to the [Chart.js docs](https://www.chartjs.org/docs/latest/getting-started/) and walk through them with the students
  - Create an `index.html` file and include the `<canvas>` element and necessary script tag provided in the Chart.js docs.
  - Create an `app.js` file and build out the code to render the chart.
  - Show students how you can change the code to have your chart render different data or colors within the bar chart.

### Lab prep

- **Why**
  - Provides students with the tools to be successful with their lab.
- **What**
  - Instructor to demo adding a chart to the Goat Vote Tracker application.
- **How**
  - Follow same steps used during the code demo with bringing in the Chart.js library.

## Lab Notes

Because of the large amount of building from the previous lab, this class is meant to play catch-up. The only lab requirement is to take the data from the list and render it as a chart using the Chart.js library.

Remind students that they need to have full functionality before moving on to the chart implementation. If they are not tracking clicks and votes yet, it is not a good use of time to attempt the chart yet.

## What changed from previous class?

No big changes from previous class.

## What bugs, issues, or suprises have come up in the past for this class?

Many students will come into this class's lecture and not have the first portion of their lab completed. Reassure them that that is normal for this point in the course and this class's lab assignment is lighter in order to give them time to catch up. Depending on the cohort, a longer code review may be needed.

## General Comments

One more thing we start doing at this time is looking at student projects from prior cohorts so that the students can start getting a feel for the scope of the projects in general. We like to discuss the successful ones as well as certain  aspects of them that needed more UI/UX attention.
