# Lecture Notes

## Intro to Learning Journals & Quizzes

### Learning Journals

Introduce learning journals to the students. Starting with this class, these will be due before the next class. Encourage the students to answer the questions prompted, as it gives us a good insight of how they are doing and will assist them in their learning as they progress through the program.

### Quizzes

- Quiz 1 will be published today.
- One-time set of instructions to give regarding quizzes. Go over the purpose of the quizzes and how we will be using them:
  - The quizzes are intended to reinforce student knowledge.
  - The quizzes also help students prepare for taking the entrance exam for Code 301, which also serves as the final exam for this course.
  - Students will always have more than 24 hours to complete a quiz.
  - Students have unlimited attempts to retake the quizzes until they earn the score they desire, and it is okay to make additional quiz attempts after the due date.
  - All quizzes are open-note, open-book, open-internet-search.
  - Avoid spending too much time reviewing the quizzes in lecture, as that can eat up a lot of time with questions and explanations. However, if a lot of students ask about a specific question, it is worthwhile to address that question as a class.

## Code Review

Timebox this to 45 minutes.

Ask a student to volunteer their code. Some criteria that you will want to follow when doing this:

1. Make sure it's code that has stayed within scope of the lab requirements
1. Potentially look for code that is not yet completed with the lab and is currently broken. This will allow the class to work together and "fix" it.

During code review, challenge the students to look at the code presented and try to understand what is going on.

Go through the code, line-by-line, and have the students both explicitly what they see (example: `let name = prompt('what is your name');` would be "let name equals prompt open parenthesis single quote what is your name closing single quote closing parenthesis semicolon)

Next, have that same student tell you what the code is doing in basic english. Example: The variable name is being declared and is being set to the response from the prompt of "what is your name".

## HTML/CSS

Most of this content should be review from the prework, as well as from 101 and 102. Don't spend more than 30 minutes on this section.

### HTML

1. Refer to the `index.html` file in the demo folder for the html for the html structure of introducing these concepts:
    1. Heading tags (`<h1>` - `<h6>`)
       - HTML heading tags are used to separate sections of a page with large text. Heading tags are used by marketing teams for SEO (Search Engine Optimization) as terms to flag as "keywords" when searching online for content.
       - It is recommended that you have only 1 `<h1>` tag on a single page.
    1. Lists (`ul` and `ol`)
       - ol = ordered list. This makes our list numeric. Great for prioritization.
       - ul = unordered list. This is a bulleted list. Great for just random tasks.

### CSS

1. Build off of the HTML from above.

1. Browsers give us "default" css styles. We don't always want these styles, and want to add our own. The best way to remove all of the built in styles is to do what we call a [CSS RESET](https://meyerweb.com/eric/tools/css/reset/)

   1. Within your demo, create a new `reset.css` file and paste the contents from the above site into it. 
   1. Then, externally link this to html file and show the difference in the page.
      `<link rel="stylesheet" type="text/css" href="reset.css" />`
   1. Next, create a new `style.css` and write new styles to add to the page. Link this stylesheet directly under the reset style.
      `<link rel="stylesheet" type="text/css" href="style.css" />`
1. Now write new CSS, following the `style.css` file in the demo folder as a guideline. Be sure to touch on the following topics:
   1. classes
   1. ids
   1. targeting specific value (`ol li {}`)

The CSS reset is new. Copy/paste the contents from the site above into a new `.css` file. Load it first, before the `style.css` in your html file. Notice the difference between the styles!

Tell students to bookmark this page or copy the contents and have it available for future labs. They should be loading in the CSS RESET for all future labs.

### JavaScript

Refer to the [JavaScript Demo File](demo.md) for details on code to write and how to teach these concepts.

1. Data Types
1. Conditionals
   - if statements
   - switch statements
   - scope
1. Arrays

### Git vs GitHub

Refer to the [Demo doc](demo.md) on what points to talk about when discussing the difference between git and GitHub. In addition, use the demo doc to see the instructions on how to walk the class through creating a repo on GitHub and cloning it down to their local machine.

### Live Code Demo

- Focus on writing code based on the assignment description and requirements.
- This assignment is the first time for the students to deal with user stories, as differentiated from technical requirements, so there needs to be some explanation about how user stories and technical requirements can overlap, but also each contain unique information.
- As you build out pieces of the demo, enforce frequent, good commit messages.
