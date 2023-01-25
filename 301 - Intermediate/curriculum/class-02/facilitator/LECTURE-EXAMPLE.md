# Lecture Notes: State, Props and Bootstrap

## Warm-Up

- **Student Analysis** (5 min)
  - Show or print the [warm-up code](../warm-up/warm-up.md)
- **Debrief** (5-10 min)
  - Refer to the [Warmup Notes](../warm-up/NOTES.md)
  - Optionally demo the running code at Repl.it

## Shred Talk

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series.
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md)
- **Note**
  - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.

## Code Review (30 min)

- Following the first lab, students will be in need of answers.
- It is also important that early in the course we start ingraining them in a daily schedule/format.
- Demonstrate the solution code for React components. Be sure to talk about how to render an image in React.

## JSON vs XML

- **Why** (5 min)
  - Both JSON and XML can be parsed and used by lots of programming languages.
  - Both JSON and XML can be used to receive data from a web server.
  - JSON doesn't use tags, its shorter syntax, can use arrays, and is easier for humans to read and write.
  - The biggest difference is that XML has to be parsed with an XML parser. JSON can be parsed by a built-in JavaScript function.
    - XML is more difficult to parse than JSON.
      - Using XML:
        1. Fetch an XML document.
        1. Use the XML DOM to loop through the document.
        1. Extract values and store in variables.
    - JSON is parsed into a ready-to-use JavaScript object.
      - Using JSON:
        1. Fetch a JSON string.
        1. JSON.Parse the JSON string.
- **What** (5 min)
  - JSON stands for JavaScript Object Notation.
    - JSON is a lightweight format for storing and transporting data.
    - JSON does not do anything, its just information structured in a specific way.
    - Data is formatted in key/value pairs, separated by commas, wrapped in curly braces (for objects) or square brackets (for arrays).
      - JSON object key names require double quotes, unlike JavaScript object key names that are not required to be quoted at all.
    - Because the JSON syntax is identical to JavaScript objects, a JavaScript program can easily convert JSON data into JavaScript objects.
  - XML stands for eXtensible Markup Language.
    - XML is a software/hardware-independent tool for storing and transporting data.
    - It's a markup language much like HTML.
    - XML does not do anything, its just information wrapped in tags.
      - The XML language has no predefined tags (roughly equivalent to JSON keys).
      - These tags are "invented" by the author of the XML document.
      - With XML, the author must define both the tags and the document structure.
  - XML and HTML are both "markup languages", but were designed with different goals:
    - XML was designed to carry data, with focus on what data is.
    - HTML was designed to display information, with focus on how information is structured.
    - XML tags are not predefined like HTML tags are.
- **How** (5 min)
  - Keep it brief.
  - Pull up the starter code for today's lab and compare it to XML version of the same data.
  - Ask students to compare and contrast the different syntax they see and ask them why they may or may not want to use XML vs JSON.
- **Resources**
  - [What is JSON](https://www.w3schools.com/whatis/whatis_json.asp)
  - [What is XML](https://www.w3schools.com/xml/xml_whatis.asp)
  - [JSON vs XML](https://www.w3schools.com/js/js_json_xml.asp)

## State and Props

- **Why** (2 min)
  - State is used as a way of configuring components with properties.
  - State can keep track of things as other components(or the same component) are changing.
- **What** (5 min)
  - State: a memory of persistant values.
  - Props: a memory of persistant values passed in by a parent.
- **How** (40 min)
  - Begin with a review of the WRRC from yesterday.
  - Draw the components on the whiteboard. Demonstrate the way each component can hold its own state and parent components can pass props down to children components. Be sure to emphasize that children components cannot pass state back up to parents. State flows down.
    - There are a lot of great analogies for this. I like using a waterfall, but find one that works for you.
  - Go through the [state and props demo](../demo/state-and-props).
  - Be sure to pause periodically to draw how props are being passed from parent to child on the whiteboard.

## React-Bootstrap

- **Why** (2 min)
  - We want our application to look nice but we don't always know how to accomplish that.
- **What** (5 min)
  - A styling library that allows us to tap into built, styled components.
- **How** (30 min)
  - Read through the documentation for react-bootstrap.
  - Add a `navbar` to the demo on state and props.
  - Get suggestions on what to add next from the class and add it.
  - Be sure to read all the documentation for that component. This is a great opportunity to introduce students to reading documentation so take your time with this!

## Deploy

- **Why** (2 min)
  - We want to share our application with the world.
- **What** (5 min)
  - Netlify is a platform that allows us to deploy our React application.
- **How** (5 min)
  - Perform the following steps for the class, or have a student share his/her screen and walk them through the process since your React app will most likely be in the class repo.
    - Create a Netlify account
      - Students may follow along if they wish, but don't stop the class to troubleshoot.
    - Hook up your Netlify account to your GitHub
      - Make sure that you have a React application available to deploy.
    - Deploy your React application
