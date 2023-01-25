# Demo

Refer to the starter [flexbox-demo code](flexbox-demo). This demo includes starter html and css files. Use VSCode for this demo.

Use the following demo steps in the [style.css](flexbox-demo/css/style.css)

## Flexbox Properties

### `display: flex`

### `flex-direction: row` or `flex-direction: column`

The `flex-direction` property sets how flex items are placed in the flex container defining the **main axis** and the direction.

```css
   #container {
     background-color: #003049;
     border: 5px solid #003049;
     height: 500px;
     margin: 0 auto;
     width: 90%;
     display: flex;
     flex-direction: row;
   }

   #container div {
     height: 200px;
     width: 200px;
   }

```

Steps to demo `display: flex` and `flex-direction`:

1. ADD: `display` property with value of `flex` - on the container element.
1. ADD: add `flex direction` property. The default is set to row but show the difference when switched to `flex-direction: column`.
1. When demoing `flex-direction: column`, change the height property on this container.
    1. At the current height of `500px`, the height of each div is not `200px` as stated in the starter code. They shrink to fit the container. Change the height to `1200px` to see that the divs will have enough room and will maintain their `200px` height. Then change the height back to `500px`.

### `justify-content`

The `justify-content` property determines how the content is distributed across the **main axis** (left to right).

```css
   #container {
     background-color: #003049;
     border: 5px solid #003049;
     height: 500px;
     margin: 0 auto;
     width: 90%;
     display: flex;
     flex-direction: row;
     justify-content: flex-start;
   }

   #container div {
     height: 200px;
     width: 200px;
   }

```

Steps to demo `justify-content`:

1. ADD: `justify-content` property. The default is flex-start.
1. DEMO the other values for `justify-content`:
    1. `center`: centers along the main axis.
    1. `space-between`: takes all the extra spaxe and distributes it between the elements but NOT on the outside edges.
    1. `space-around`: gives each element the same amount of space around it.
    1. `space-evenly`: ensures the space is even between every element.

### `flex-wrap`

The `flex-wrap` property determines whether the elements wrap along the main axis on to a new line if it is horizon or new column if it is vertical.

```css
   #container {
     background-color: #003049;
     border: 5px solid #003049;
     height: 500px;
     margin: 0 auto;
     width: 90%;
     display: flex;
     flex-direction: column;
     flex-wrap: wrap;
     justify-content: flex-start;
   }

   #container div {
     height: 200px;
     width: 200px;
   }

```

Steps to demo `flex-wrap`:

1. CHANGE: `flex-direction` to `column`. The divs will shrink to fit into the `500px` height of the container.
1. CHANGE (optional): `justify-content` to `flex-start`.
1. ADD: `flex-wrap` property and set the value to `wrap`. This will create new columns and the divs will now maintain their `200px` height as they wrap.
1. DEMO `flex-wrap` with a `flex-direction` of `row`.
    1. CHANGE the width on the divs to a much larger width to see them wrap.

### `align-items`

The `align-items` property determines how the content is distributed across the **cross axis** (top to bottom).

```css
   #container {
     background-color: #003049;
     border: 5px solid #003049;
     height: 500px;
     margin: 0 auto;
     width: 90%;
     display: flex;
     align-items: flex-start;
     flex-direction: row;
     justify-content: center;
   }

   #container div {
     height: 200px;
     width: 200px;
   }

```

Steps to demo `align-items`:

1. CHANGE: `flex-direction` to `row` if not already.
1. CHANGE: `justify-content` to `center`.
1. ADD: `align-items` property. The default is `flex-start` which will align the items to the top of the container, no change.
1. DEMO a few other values for `align-items`:
    1. `flex-end`: align items to the bottom of the container.
    1. `center`: centers the items vertically.
1. CHANGE `flex-direction` to `column` and use `align-items` to show how columns are effected.

### `align-self`

The `align-self` property is similiar to `align-items` but can be added to the items in the flex container.

```css
   #container {
     background-color: #003049;
     border: 5px solid #003049;
     height: 500px;
     margin: 0 auto;
     width: 90%;
     display: flex;
     align-items: flex-start;
     flex-direction: row;
     justify-content: center;
   }

   #container div {
     height: 200px;
     width: 200px;
   }

   div:nth-of-type(3){
       align-self: center;
   }

```

Steps to demo `align-self`:

1. CHANGE: `flex-direction` to `row` if not already.
1. CHANGE: `justify-content` to `center` if not already.
1. CHANGE: `align-items` to `flex-start` if not already.
1. TARGET one of the divs and ADD `align-self` property.
1. DEMO the following values for `align-self`:
    1. `center`: this will align this div to the center of the cross axis.
    1. `flex-start`: this will align the div at the top of the cross axis.
    1. `flex-end`: this will align the div at the bottom of the cross axis.

## Layout Demo Using Flex

Refer to the [simple layout](whiteboard-diagrams/flex-layout.png) to demonstrate how to use flex to layout a page.

Use CodePen or VSCode and enter the following:

### HTML

```html
<body>
  <header>
    <nav>
      <ul>
        <li>Nav 1</li>
        <li>Nav 2</li>
        <li>Nav 3</li>
      </ul>
    </nav>
  </header>
  <main>
    <aside></aside>
    <article>
      <img src="https://via.placeholder.com/300/000" alt="placeholder-img">
      <img src="https://via.placeholder.com/300/000" alt="placeholder-img">
      <img src="https://via.placeholder.com/300/000" alt="placeholder-img">
    </article>
  </main>
  <footer></footer>
</body>
```

### CSS

Demo using VSCode, include a reset.css.

```css
header {
  background-color: lightgrey;
  border: 1px solid black;
}

nav ul {
  align-items: center;
  display: flex;
  height: 150px;
  justify-content: space-around;
  margin: auto;
  width: 80%;
}

li {
  font-size: 2em;
}

main {
  display: flex;
}

aside {
  background-color: lightpink;
  border: 1px solid black;
  height: 1000px;
  width: 30%;
}

article {
  align-items: flex-end;
  background-color: lightblue;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
}

img {
  margin-bottom: 50px;
}

footer {
  background-color: lightgrey;
  border: 1px solid black;
  height: 150px;
}
```
