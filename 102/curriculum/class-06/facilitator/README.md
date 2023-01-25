# Facilitators Guide: Class 06 - Dynamic web pages with JavaScript

Conditional logic with `if` & `else`

Input and output with `prompt` & `document.write`

## Preparation

1. Review the Reading, the Lab, and the Demo code
1. To execute example JS in VSCode, install:
    - <https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner>

## Assignments

*All assignments are due before midnight. Spend a couple of minutes going over each assignment in Canvas before Reading and Lab time.*

- Lab: 06 - Activate web pages with JS
- Read: 06 - Dynamic web pages with JS Computer Architecture and Logic
- Review: Class 06 - Dynamic web pages with JS

## Lecture Main Topics & Overall Flow

### Review slides and presenter notes

Practice timing and language for every slide in the [Slide Deck](https://docs.google.com/presentation/d/1NlKlBgC3bN0r1zmwrVD5eREgQk-KiloFsJhT7Uy0n10/edit).

Review the presenter notes on every slide, to be able to put it into **your own words**.

### Schedule for the day

|  Time  |  ~Duration|   Task                                                 |
|---     |---        |---                                                     |
|  0:00  |  30 min   |  Review HTML/CSS- Demo students' work                  |
|  0:30  |  15 min   |  Recap JS - What do you already know?                  |
|  0:45  |  45 min   |  Read: 06- Dynamic web pages with JS                   |
|  Break |           |                                                        |
|  1:30  |  45 min   |  Live demo JS - Mockup to Markup                       |
|  2:15  |  45 min   |  Lab 06 Activate web pages with JS                     |
|  3:00  |           |  End - Assign homework Computer Architecture and Logic |

## Expected Student Questions and Challenges

- Although JavaScript is briefly discussed in 101, class-06 is the first hands-on JavaScript experience for most students
- Students are not accustomed to working in multiple repositories, confirm work in the html/css/js repo as opposed to LJ or class repo clone

## Miscellaneous Comments and Notes

JavaScript tips and the 102 use case:

- Have a working demo adding in `prompt`, `if else`, and `document.write`
    - an inline script example
    - `<script>document.write('<h3>Welcome!</h3>');</script>`
- Also consider (during class demo):
  - script in html head
  - `<script src="<js/add-content.js>"></script>`
  - with inline function calls:
  - `<script> document.write(someFunction()); </script>`
- Have a deliberate conversation about where we import js file
  - In-line or in head of document for 102 purposes
- Use case here is the need for a quick, 102-level dev environment.  This will be done differently in 201 as student learning progresses.


## New Vocabulary

- JavaScript - Coding language of the web.  Used to create and control dynamic website content.
- conditionals - A series of checks that determine an outcome.  If something happens, the do this.  If that does not happen but this happens, do this.  If all else fails, then do this last thing.
- operators - Series of symbols that perform arithmetic on numbers.  (+, -, *, **, /, %. ++, --)
- data types - A particular kind of data item, integer(number), string (words), boolean (true/false), array.  There are more advanced data types that will be introduced in 401.
- variable - a representation or nick name for some type of data.
