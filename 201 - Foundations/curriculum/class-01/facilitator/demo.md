# Demo

## Writing HTML, CSS, and JavaScript

Review the Demo code located in the `/demo` folder. Use VSCode for this demo.

## HTML

- Start by creating an index.html file.
- Build out the basic HTML skeleton.
- Stress the importance of why students should be using semantic HTML elements.
  - Semantic elements accurately describe the purpose of the element and the type of content that is inside of them.
- This could also be a good time to show the students VSCode's built in Emmet shortcuts. To get a very basic piece of html code laid out, type `!` then hit `tab` or `enter`.

```html
  <!DOCTYPE html>
    <html>
      <head>
        <title>Class 01 Demo</title>
      </head>

      <body>
        <header>
          <h1>Class 01 Demo</h1>
        </header>

        <main>

        </main>

        <footer>&copy; Code Fellows</footer>
      </body>
    </html>
```

## CSS

- For this first class assignment, students will keep the CSS inside of the HTML document through the use of internal and inline styles. Starting with the next class, and from there on, students will be writing CSS in external stylesheets.
- First demonstrate internal style with the use of a `<style>` tag inside of the `<head>` tag.
- Touch on each component in the CSS rule you create in the demo.
  - CSS selector
  - CSS properties inside of a `{ ... }` block separated by a semicolon
  - Kebab casing on property names
- Demonstrate inline style with the use of a the `style` attribute on an HTML element.
  - CSS properties are placed inside of a set of double quotes and separated by a semicolon.
  - Point out that the CSS will only apply to the HTML element into which they are embedded.
  - Also note to the students that inline styles always overwrite any other styles in stylesheets or internal styles and have the highest specificity.

### Internal Style

```html
  <!DOCTYPE html>
    <html>
      <head>
        <title>Class 01 Demo</title>
        <style>

          body {
            background-color: darkgrey;
          }

        </style>
      </head>
    </html>
```

### Inline Style

```html
  <p style="color: #023047; background-color: #ffb703">This is a paragraph tag.</p>
```

## JavaScript

- Introduce the `<script>` tag and it's placement before the `</body>` tag. Like the CSS, for this class students will be keeping their JavaScript internal within their HTML document. Starting with the next class, and from there on, all JavaScript will be in a separate file.
- Explain that even though we are in the HTML document they will still be writing JavaScript, so appropriate code style for JS should still be applied.
  - Proper indenting and spacing
  - Camel case format for variable names
  - Single quotes around strings
- Demonstrate an example of `prompt()`. Explain that `prompt()` has a return and as a developer, when a function has a return we will want to capture that value using a variable.
- In this course students will be using `let` to declare variables within their code. But you may want to explain the difference between `var` and `let`. Explain that declaring variables with `let` is similar to `var` but that it is newer and tailored to writing cleaner code.
  - Avoid discussions on scope and `const`, though it is fine to explain that we will be teaching it soon.
- Create a `console.log()` to demonstrate string concatentation with the variable holding the value of the return from the previous `prompt()`. Explain the use of the escape character `\` if necessary.
- Demonstrate an `alert()` by again using string contentation to alert the user a message based on their input from the prompt.

```html
  <!DOCTYPE html>
    <html>
      <head>
        <title>Class 01 Demo</title>
      </head>

      <body>
        <header>
          <h1>Class 01 Demo</h1>
        </header>
        <main></main>
        <footer>&copy; Code Fellows</footer>

        <script>
          let siteVisitor = prompt('What is your name?');
          console.log('Our visitor\'s name is ' + siteVisitor);

          alert('Welcome to my site ' + siteVisitor + '!');

        </script>
      </body>
    </html>
```

## Developer Tools

- This is a great demo to get students used to opening the Chrome DevTools (`cmd+option+j` on a Mac or `shift+CTRL+j` on Windows or Linux).
- Show them the Elements, Console, and Sources tabs. Open the console to inspect the log messages.
- Show the students how to access their variables in the console.

### Lighthouse Reports

- Run a Lighthouse report from the Chrome DevTools to analyze the accessibility of the application.
- By implementing accessibility best practices, we are improving the usability of the site for all users. This is important because we want to ensure that all of our potential users have a decent user experience.
- The following options to generate a Lighthouse report should be selected:
  - Mode: Navigation
  - Device: Desktop
  - Categories: Accessibility
- A score of 50-65 for the students to strive for within the first module is a good start. As they progress in following modules, they will want to strive for a higher score.

## Publish your Code

Create a gist, and copy/paste your code into a gist in Github. Show the students your link and how to submit the assignment to Canvas.
