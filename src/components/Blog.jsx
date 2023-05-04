import React from "react";

const Blog = () => {
  return (
    <div className="my-container text-justify">
      <h2 className="max-w-lg mb-10 font-sans text-3xl font-bold tracking-tight sm:text-4xl md:mx-auto">
        Questions and Answers Session
      </h2>
      <div className="space-y-8">
        <div>
          <p className="mb-4 text-xl font-medium ">
            a. Tell us the differences between uncontrolled and controlled
            components?
          </p>
          <p>
            Uncontrolled components are components that manage their state
            internally without relying on any external control or input. This
            means that the component keeps track of its own state, and any
            changes made to that state are done within the component itself.
            Uncontrolled components are typically used for simple forms or
            components that don't need to interact with other parts of the
            application. Controlled components, on the other hand, are
            components that rely on external control to manage their state. This
            means that any changes made to the component's state are done
            through external input, such as user input or data passed down from
            a parent component. Controlled components are typically used for
            more complex forms or components that need to interact with other
            parts of the application.The key difference between these two types
            of components is where the state management responsibility lies.
            Uncontrolled components manage their state internally, while
            controlled components rely on external control to manage their
            state. The choice between using an uncontrolled or controlled
            component depends on the specific requirements of the application
            and the complexity of the component being developed.
            <br />
          </p>
        </div>
        <div>
          <p className="mb-4 text-xl font-medium">
            b. How to validate React props using PropTypes?
          </p>
          <p>
            There are numerous PropType validators in React props such as
            01. PropTypes.any : The prop can be of any data type. 02. PropTypes.bool :
            The prop should be a Boolean. 03. PropTypes.number : The prop should be
            a number. 04. PropTypes.string : The prop should be a string.
            05. PropTypes.func : The prop should be a function. PropTypes.array :
            The prop should be an array.
            <br />
          </p>
        </div>
        <div>
          <p className="mb-4 text-xl font-medium ">
            c.Tell us the difference between nodejs and express js?
          </p>
          <p>
            Node.js is a JavaScript runtime, while Express.js is a web
            application framework built on top of Node.js. Node.js provides the
            core functionality for building server-side applications in
            JavaScript, while Express.js provides additional features and tools
            for building web applications, such as routing and middleware.
            Node.js provides a set of built-in modules and APIs for working with
            files, network connections, and other system resources, while
            Express.js provides a set of features and tools for building web
            applications, such as routing, middleware, and templates. Node.js is
            low-level and can be used to build a variety of applications, while
            Express.js is designed specifically for building web applications.
            Node.js is often used as a foundation for building web frameworks
            and other tools, while Express.js is a popular choice for building
            web applications in JavaScript.
            <br />
          </p>
        </div>
        <div>
          <p className="mb-4 text-xl font-medium">
            d. What is a custom hook, and why will you create a custom hook?
          </p>
          <p>
            A custom hook is a function in React that allows you to reuse
            stateful logic across multiple components. Custom hooks are a way to
            abstract away complex logic and share it between components. Custom
            hooks are typically created when you find yourself repeating the
            same code across multiple components. For example, you might have
            several components that need to fetch data from an API, handle
            loading and error states, and update the component when the data
            changes. By creating a custom hook to handle this logic, you can
            reuse it across multiple components and avoid duplicating code.This
            custom hook uses the useState and useEffect hooks to fetch data from
            an API and manage loading and error states. The hook takes a url
            parameter and returns an object with the data, loading, and error
            states.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
