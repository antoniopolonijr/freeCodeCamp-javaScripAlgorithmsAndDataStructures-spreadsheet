// function to generate a range of numbers.
const range = (start, end) =>
  Array(end - start + 1)
    .fill(start)
    .map((element, index) => element + index);
// Your array will need to be the size of the range. You can calculate this by finding the difference between end and start, and adding 1 to the result.
// The Array() constructor has a .fill() method which can be used to fill an array with a value. You can use this to fill your array with the start value.
// Currently your range function returns an array with the correct length, but all of the values are the value of start. To fix this, chain the .map() method to your .fill() method.

// Now that you have a range function, you can use it to create a range of letters as well.
const charRange = (start, end) =>
  range(start.charCodeAt(0), end.charCodeAt(0)).map((code) =>
    String.fromCharCode(code)
  );
// Your range function expects numbers, but your start and end values will be strings (specifically, they will be single characters such as A).
// Convert your start and end values in your range() call to numbers by using the .charCodeAt() method on them, passing the number 0 as the argument to that method.
// range() will return an array of numbers, which you need to convert back into characters. Chain the .map() method to your range() call.

// function to programmatically generate the cells for the spreadsheet.
window.onload = () => {
  // The global window object represents the browser window (or tab). It has an onload property which allows you to define behavior when the window has loaded the entire page, including stylesheets and scripts.
  const container = document.getElementById("container");
  /*
  Functions are ideal for reusable logic. When a function itself needs to reuse logic, you can declare a nested function to handle that logic. Here is an example of a nested function:
  Example Code
  const outer = () => {
  const inner = () => {
  };
  };
  */
  const createLabel = (name) => {
    const label = document.createElement("div"); // Remember that the document object has a .createElement() method which allows you to dynamically create new HTML elements.
    label.className = "label"; // Set the className of the label element to label
    label.textContent = name; // set the textContent to the name parameter.
    container.appendChild(label); // .appendChild() method to add your label element to the container element.
    const letters = charRange("A", "J");
    letters.forEach(createLabel); // You should see some letters appear across the top of your spreadsheet.
    range(1, 99).forEach((number) => {
      createLabel(number); // Remember that range() returns an array, so you can chain array methods directly to the function call. // You should see some numbers appear in your spreadsheet.
      letters.forEach((letter) => {
        const input = document.createElement("input");
        input.type = "text";
        input.id = letter + number;
        input.ariaLabel = letter + number;
        /*
        In earlier projects you learned about the setAttribute method. Another way to update an attribute in JavaScript is to use the following syntax:
        Example Code
        el.attribute = value;
        The property names for hyphenated HTML attribute values, such as aria-label, follow camel case, becoming ariaLabel.
        Example Code
        el.ariaLabel = "Aria Label Value";
        */
        container.appendChild(input); // You should now be able to see the cells of your spreadsheet.
      });
    });
  };
};
