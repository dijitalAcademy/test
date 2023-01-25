# Facilitators Guide: Class 04 - Structure web pages with HTML

Semantic HTML tags FTW!

Rather than lecturing on HTML, the class will tell you what they know. Use the discussion time to highlight WHY, WHAT, and HOW. For HOW, focus specifically on the anatomy of an element (open, closing tags, attributes, content), a few common tags (or whatever they can tell you about), and emphasis that HTML is about structuring pages with semantic tags.

The Demo will be generating a wireframe for an arbitrary project, and then coding up the basic structure.

In-class demo should split screen between VSCode and Chrome to display VSCode Live Server extension.  Students can then see HTML populate the browser during live demo.

- note:  If not familiar with the VSCode extension:  
  - [VScode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  - potentially less student-confusing than the globally installed live-server package used commonly in 201/301
  - guide students to install the extension if they have not already through VS Code

## Preparation

1. Review the Reading Discussion, the Demo, and the Lab assignment.
1. It's time to run code from VS Code in the browser. Install the live-server extension, and direct students to do the same:
    - <https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer>

## Assignments

*All assignments are due before midnight. Spend a couple of minutes going over each assignment in Canvas before Reading and Lab time.*

- Lab: 04 - Structure Web Pages with HTML
- Read: 04 - Structure Web Pages with HTML
- Review: Class 04 - Structure Web Pages with HTML

## Lecture Main Topics & Overall Flow

### Review slides and presenter notes

Practice timing and language for every slide in the [Slide Deck](https://docs.google.com/presentation/d/1GkRizg4oZGcFrus-8nWGDR51oJvmBIllTyPi4quoAsc/edit).

Review the presenter notes on every slide, to be able to put it into **your own words**.

### Schedule for the Day

|  Time  |  ~Duration|   Task                                   |
|---     |---        |---                                       |
|  0:00  |  15 min   |  Review cloning/gitflow                  |
|  0:15  |  15 min   |  Recap HTML- What do you know?           |
|  0:30  |  45 min   |  Read 04 Structure Web Pages with HTML   |
|  1:15  |  30 min   |  Live Demo - From Mockup to Markup       |
|  Break |           |                                          |
|  1:45  |  75 min   |  Lab 04 Wireframe and Build with Partners|
|  3:00  |           |  End                                     |

## Expected Student Questions and Challenges

Some students will mix up what tags go where (eg: `nav` for links).

## Miscellaneous Comments and Notes

- split screen with VSCode and Chrome to display VSCode Live Server extension
- use the same class-mobbed HTML wireframe for next class
- helpful wireframe inclusions:
  - header
    - h1
    - nav > ul > li*4
  - main
    - section > article*3 > figure > img
    - insert figcaption as first or lastchild of figure (accessibility FTW!)
  - footer
    - `&copy;` - symbol insertion
    - sitemap - nav > ul > li*4
- *note CSS opportunities in class-05*: using these wireframe inclusions

## New Vocabulary

- HTML / Markup - HyperText Markup Language is a set of symbols inserted into a file to display on the internet.  Markup tells web browsers how to display words and images.
- Semantics - describing plainly a meaning. Semantic HTMl refers to tags that clearly describe their meaning both to the browser and the developer.
- Wireframe - To design a web page layout and structure.
- Personas - Fictitious, specific, and concrete representation of a target user.
- Meta - describes and provides information about something.
- Content - Refers to the words, videos, and images on a website.
- Element - Everything on a page from every field, link, image, test and many others things.
- Tag - Command that define how your web browser formats and displays content.
- Attribute - A change or modifier to a tag that changes the default behavior
- Structure vs Presentation
  - Structure - This is the HTML layout that gives your web page content.
  - Presentation - This is the style that you give your page with CSS.
