# Lecture Notes

<!-- NOTE TO INSTRUCTOR: If you make any changes to the lecture, make matching changes into REAMDE.md -->

## Campus Kickoff

Work with your campus director for the Class 1 kickoff, using the [201 orientation slide deck](https://docs.google.com/presentation/d/10z8h0kdeHRtuBZ0RoJ1JWxSpiFKgyeMNyDoz1V4TtRU/edit#slide=id.gf7316a0f20_0_0).

Introduce yourself and your instructional team to the class by providing them a quick background of your experience. If you have TAs, or other instructional staff, have them also introduce themselves.

Inform students that the TA's will be helping with grading and student questions during lab.

Provide students with the general availability of the instructional staff. Encourage them to utilize each other when staff are unavailable.

## Intro to Canvas

Introduce Canvas to the students. Show them the following:

1. Modules view of assignments
1. Syllabus
1. Course Overview
1. Calender view

### Review of Career Coaching Assignments

Students should have completed some prework assignments related to Career Coaching. Discuss the value of focusing on each of these, even though it is early in their career change process.

- Career Coaching Overview: Sets the tone of the career assignments.
- Professional Competency Self-Assessment: Students will likely rank themselves lower in areas such as networking and tool proficiency, which is expected at this stage. Remind students that these numbers should increase as they continue throughout the program, and even by the end of 201. These competencies are evaluated from the instructor perspective for the End-of-course Instructor Review in Canvas. If time allows, discuss their responses together in your one-on-one session in week 2.
- Prepare your Resume: Clarify to students that this should contain the structure of their resume, but they are not expected to have much content related to programming yet. The focus of this assignment is to follow the structure based on the template they choose. By working on the correct structure, they can easily add other information later.
- Prepare your LinkedIn: LinkedIn is a popular tool used by job-seekers and recruiters. It is important that students begin to think about their professional online presence.
- Identify Your Accountability Partners: Each student will have two accountability partners for later assignments. Encourage students to form groups of three and serve as each others' partners.
- Partner Power Hour Reports: Students are required to fill our a report following every Partner Power Hour talk, which takes place regularly.

Take this opportunity to provide an overview of the upcoming Career Coaching assignments for the first week.

- Talk to Your Network: Students are not expected to be well-connected in the industry yet, this assignment is geared towards talking to anyone they happen to know or meet in tech. It is an informal meeting so they begin to warm up their network.
- Attend a Meetup: Meetups are a great way to meet fellow developers. Encourage students to find a Meetup that they find interesting. For shy students, encourage them to attend with a classmate.
- Behavioral Interview Questions: Students will use the S.T.A.R method to write drafts of two behavioral interview questions.

## Reading Review

Don't spend more than 10 minutes or so on this. Teach the students how to "skim" technical documentation. They should pay close attention to the dark colored purple pages. These pages are really great overviews and high level notes of what the chapters contain.

Encourage students to do the reading assignments, and utilize the material as a resource for their lab assignments and questions they have on their assignments.

Let students know that they will often see `var` used in place of `let` in online references. That is an artifact of the progressing nature of code. What was best practice when many articles were written has evolved and we will be teaching `let` and `const` because they are more suited to writing clean code.

## Command Line, VS Code & Linter Setup

### Command Line Basics

Review the basic Unix Commands:

- `pwd`
- Filepaths and up/down navigation concepts
- `tree`
- `ls`, `ls -la`
- `cd`, `mkdir`
- `touch`, `code`
- `mv`, `rm`, `cp`

### Intro to Git & GitHub

Git Intro:

- What is Git?
- Version control concepts, show an example of a 201 final project repo and, at a high level, point out commits, branches, network graph
  - Point out the benefits of keeping their code organized
- Analogy of saving multiple versions of a term paper vs. overwriting changes with each save
- Series of snapshots
- HEAD

### Configure VS Code

In settings:

- editor.tabSize = 2
- editor.detectIndentation = true
- editor.wordWrap = on

### Setup your Linter

The goal of this section is to setup your the `.eslintrc` with the students. In addition, explain to the students
that this file should exist in **every** project they create in javascript, so save it somewhere that is easily accessible.

- Students need to be guided through creating a .eslintrc.json and placing it inside of each project directory that they create.
  - Have students enter `cd` on the command line to navigate to their Home directory
  - Students then should then enter `code .eslintrc.json` to create a file to store the linter rules. If this command does not work, then the students have a problem with their VSCode setup that needs to be addressed, most likely a `failure to "Install Shell Commands"` from the VSCode menu.
  - Open `.eslintrc.json`, located in the [configs](../../../configs/.eslintrc.json) folder of this guide:
    - Put this file into your class GitHub repo for students to have as a reference for their assignments.
    - Be sure to point out that this is probably the ONLY time that it is OK to just copy/paste code!
  - Have the students copy/paste that code into the `.eslintrc.json` file that they created, and be sure to tell them to save the file.
  - Students will need to restart VSCode for the changes to take effect.
  - Once they do, guide them through entering `code lint-test.js` at the command line and then paste the contents of the JS sample that you send to them through Slack.

Confirm VSCode: type `code` in the command line to verify that it opens properly. Command line tools may need to be installed. If Mac users find that `code` disappears from their PATH every so often, they need to reinstall VSCode, and ensure they drag the extracted application into the `Applications` directory BEFORE opening it for the first time.

Directory structure: Have students set up a directory at `~/codefellows/201/` in which they will store their classwork. Go over directory structure in general; compare to GUI.

### Live code Demo

Demo Code is located in the `demo` folder.
An outline of how to approach the demo is located [HERE](demo.md)

The code demo should be written completely from scratch in front of the class. After lecture, push your code demo to the class repo and inform students that these demos will be available for their reference each day. This will relieve any pressure that students may feel to follow along with the code demo during class.

Introduce `let`. Cover the difference between `var` and `let`. Students will not have to worry about scope in the first lab but you should introduce it to prepare them. If a student brings up `const` you can briefly cover it as well. We will be using only `let` and `const` in 201.

Do not be deceived by the simplicity of this demo: there is A LOT of stuff to go over with the students that will take a lot of time to cover. This is their first real dive into writing code with their new tools.

This code demo is to help students be ready to complete the first assignment and also to show off some functionality of the REPL and Chrome Developer Tools. This demo should also reveal any lingering issues with student computer setups.

Demonstrate how to use the `live-server` command to enable automatic browser refreshing.

### Lab Setup

To finish the day, go over the lab assignment and show students how to find/read the assignment, complete the assignment as a code demo, and submit the assignment (which for today, is submitted in a GitHub Gist to introduce the students to that tool).

The lab assignments are located in Canvas everyday.

Demonstrate how to open projects in the editor from the command line. For example, `code .`. Also demonstrate how to touch and open a file in a single command. For example, `code index.html`.
