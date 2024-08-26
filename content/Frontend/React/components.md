---
title: Components In React
---
React components are the building blocks of any React application. They are JavaScript functions or classes that optionally accept inputs, called "props," and return React elements that describe what should appear on the screen.

Here’s a simple example of a React component structure:

```jsx
function App() {
  return (
    <div>
      <Header />
      <Greeting name="Alice" />
      <Footer />
    </div>
  );
}

function Header() {
  return <header>Welcome to My App</header>;
}

function Footer() {
  return <footer>© 2024 My App</footer>;
}

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

---
## Class Components in React

Class components are a more traditional way to define components in React. Before the introduction of React Hooks, class components were the primary way to manage state and handle lifecycle methods in React applications. Although functional components are now more common, understanding class components is still important, especially when working with legacy codebases or libraries that rely on them.

### Characteristics

1. **State Management:**
   - Class components have their own internal state, which is an object that holds data that may change over time.
   - State is managed within the component and is accessed using `this.state`.
   - State can be updated using the `this.setState()` method.

2. **Lifecycle Methods:**
   - Class components have access to a series of lifecycle methods that allow you to hook into different stages of the component’s life cycle, such as mounting, updating, and unmounting.

3. **`this` Keyword:**
   - In class components, `this` refers to the instance of the component and is used to access props, state, and methods.
   - `this` can be tricky to work with, especially in event handlers, so it often requires binding methods to the component instance.

### Basic Structure

Here’s a simple example of a class component:

```jsx
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

// Usage in a parent component
class App extends Component {
  render() {
    return (
      <div>
        <Greeting name="Alice" />
        <Greeting name="Bob" />
      </div>
    );
  }
}
```

### Managing State

Class components can manage their own state using the `this.state` object. Here’s an example:

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  // Initialize state in the constructor
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // Method to handle the button click
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}

// Usage in a parent component
class App extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}
```

### Lifecycle Methods

Lifecycle methods allow you to perform actions at different points in a component's life. Some common lifecycle methods include:

1. **`componentDidMount()`:**
   - Called once after the component is mounted (inserted into the DOM).
   - Often used for data fetching, subscriptions, or setting up timers.

2. **`componentDidUpdate(prevProps, prevState)`:**
   - Called after the component updates (e.g., after state or props change).
   - Useful for performing actions based on changes to state or props.

3. **`componentWillUnmount()`:**
   - Called just before the component is unmounted (removed from the DOM).
   - Used for cleanup, such as clearing timers or canceling network requests.

Here’s an example using lifecycle methods:

```jsx
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, 1000);
  }

  componentDidUpdate() {
    console.log(`Timer updated: ${this.state.seconds} seconds`);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }
}

// Usage in a parent component
class App extends Component {
  render() {
    return (
      <div>
        <Timer />
      </div>
    );
  }
}
```

### Conclusion

Class components provide a more powerful and flexible way to build components in React, especially when you need to manage complex state or lifecycle methods. However, with the advent of React Hooks, many of the features that made class components necessary are now available in functional components, which tend to be more concise and easier to work with. Nevertheless, understanding class components is important for working with existing codebases and for deeper knowledge of React's evolution.

---
## Functional Components in React

Functional components are one of the two main types of components in React, the other being class components. They are simple JavaScript functions that return JSX (JavaScript XML), which is a syntax extension that resembles HTML. Functional components are often preferred for their simplicity, especially since the introduction of React Hooks, which allow functional components to manage state and side effects, making them just as powerful as class components.

### Characteristics

1. **Simplicity:**
   - Functional components are plain JavaScript functions that take in `props` as an argument and return JSX.
   - They don't require the use of the `this` keyword, making them easier to read and understand.

2. **Stateless vs. Stateful:**
   - Initially, functional components were stateless and relied on class components to manage state. However, with the introduction of Hooks, functional components can now manage their own state and lifecycle methods.
   
3. **No `render()` Method:**
   - Unlike class components, functional components do not require a `render()` method. They directly return JSX from the function body.

4. **Hooks:**
   - React Hooks like `useState` and `useEffect` enable functional components to handle state, side effects, and other features that were traditionally only available in class components.

### Example

Here’s a simple example of a functional component:

```jsx
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named "count" with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
```

#### Explanation

1. **Importing React and `useState`:**
   - The `useState` Hook is imported from React. This Hook allows you to add state to your functional component.

2. **State Management:**
   - `const [count, setCount] = useState(0);`
   - This line declares a state variable `count` and a function `setCount` to update the state. The initial value of `count` is set to `0`.

3. **Rendering JSX:**
   - The `Counter` component returns a JSX structure that includes an `<h1>` element to display the current count and a `<button>` element to increment the count when clicked.

4. **Event Handling:**
   - The `onClick` event on the button triggers the `increment` function, which updates the state by calling `setCount(count + 1)`.

5. **Component Usage:**
   - This component can be used in other parts of your application like so:
     ```jsx
     function App() {
       return (
         <div>
           <Counter />
         </div>
       );
     }
     ```
   - The `App` component will render the `Counter` component, allowing the user to see and interact with the counter.

### Benefits

1. **Concise and Readable:**
   - Functional components are usually more concise than class components. They focus on what the UI should look like without the boilerplate associated with class components.

2. **Easier to Test:**
   - Because functional components are simple functions, they are easier to test. You can treat them as pure functions that return a specific output given specific inputs (props).

3. **Performance:**
   - Functional components can be more performant in certain cases, especially when using React.memo to memoize the component.

### Conclusion

Functional components are a powerful and concise way to build React applications. With the addition of Hooks, they have become the go-to choice for many React developers, offering the ability to manage state, lifecycle, and side effects in a simple and straightforward manner. Whether you're building simple UIs or complex applications, functional components provide a flexible and efficient approach to component-based architecture in React.