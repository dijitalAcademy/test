# Facilitators Guide: Class 02 - The Coder's Computer

Time for the Installfest! This is computer setup day. It's worth taking a whole class session just to get this right, as the rest of the student's career will be working with these types of tools on a computer.

Proper configuration now means students get to focus on the content of all future classes, rather than fighting their systems.

## Preparation

1. Ensure that students can access course recordings.
    - Verify a link to these course videos is accessible in the Canvas Syllabus. Share via Slack as well.
    - Confirm that students are able to access recorded lectures on their machines and have been shown how.
1. Review the [Reading Assignment](../DISCUSSION.md), and the linked resources.
1. Work through the Computer Setup Guide (linked from the Lab) on your own computer, so you understand the steps, and where people might get hung up.
1. If you aren't on Windows, install a [Win10 Virtual Machine](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/) so you can help people through the Windows installation process. This works well enough with free VirtualBox (a VM manager), which can be installed on macOS with `brew cask install virtualbox`.

## Assignments

*All assignments are due before midnight. Spend a couple of minutes going over each assignment in Canvas before Reading and Lab time.*

- Read: 02 - The Coder's Computer
- Lab: 02 - The Coder's Computer
- Review: Class 02 - Computer Config

## Lecture Main Topics & Overall Flow

### Review slides and presenter notes

Practice timing and language for every slide in the [Slide Deck](https://docs.google.com/presentation/d/1A5HceeyBY6iZ-yEidix8lI2JLQViYxFbNK8Ij2UWgHs/edit).

Review the presenter notes on every slide, to be able to put it into **your own words**.

### Schedule for the day

|  Time  |  ~Duration|   Task                                      |
|---     |---        |---                                          |
|  0:00  |  15 min   |  Review Markdown                            |
|  0:15  |  15 min   |  Developer Tools                            |
|  0:30  |  20 min   |  Demo GUI/Terminal                          |
|  0:50  |  10 min   |  Live demo HTML in VS Code / Observations   |
|  1:00  |  30 min   |  Read 02 The Coder's Computer               |
|  Break |           |                                             |
|  1:30  |  10 min   |  Abstraction                                |
|  1:40  |  80 min   |  Lab 02 The Coder's Computer / Installfest!!|
|  3:00  |           |  End                                        |

## Expected Student Questions and Challenges

- outdated operating systems
- used machines with existing dev setups
- expect students to try running assigned terminal commands without completing setup
- consider sharing previous 102 feedback regarding readings.  Point out that readings are in Canvas assignments and students can look ahead to those readings (the night before possibly)
- `eslint` has caused errors for some students in the past in Windows. If this occurs, try forcing to a known working version
  - `npm install -g eslint@6.8.0`

### Command Line Errors

Students aren't accustomed to using the terminal.  Difficulties can arise while distinguishing between a command running correctly, and a command failing with an error message.

### WSL

Windows users have an extra set of steps to get the Ubuntu command line installed. Make it very clear:

1. They don't need to conceptually grasp all they are doing.
2. Important to carefully work through the steps regardless.

## Miscellaneous Comments and Notes

- Single biggest fail for WSL setup: reading instructions.  Students do not conceptually understand, therefore obstacles more likely present themselves during installfest. Encourage students to follow the step by step process and ask questions as needed.
- Admin level permissions needed if computer was used by sibling or spouse issues may arise

## New Vocabulary

- CLI (Command Line Interface) - Providing commands to a computer to navigate, control, and manipulate the file system.
- Terminal - Text based interface program to provide commands to the computer.
- GUI (Graphical User Interface) - Graphical interface system used to navigate a computer in a user-friendly environment.
- IDE - Integrated Development Environment. Program used to help with coding.  Provides syntax highlighting, and some level of error detection.
- VS Code - Free program provided by Microsoft that allows for help with programming.
- Abstraction - Using specific details to study objects or systems.
