
# Using Context in React

This react app demonstrates State Managment in React using inbuilt library Context API. Apparently this app does not use one Context, but three to manage multiple state across different components.

It also demonstrates the use of **useReducer()** hook and **persisting data** on page reload by the use of Local Storage. 
## Three Context

The three context used in this code are as follows:

- Auth Context
- Theme Context
- Counter Context

### Auth Context

This context simulates user Login and Logout functionality by simply clicking on respective option. In a practical real-world application, this can be achieved with proper authorization instead of simple click.
State of this Context is not lost on page reload or revisit, in other words **Data is persisted**.  

### Theme Context

This context simulates switching between dark theme and light theme.
State of this Context is not lost on page reload or revisit, in other words **Data is persisted**.

### Counter Context

A classic counter based example to show how the State can be accessed and modified in different components. State of this Context is lost on page reload or revisit, in other words **Data is  not persisted**.

## Authors

- [@aktech27](https://github.com/aktech27/)


## Contributing

Contributions and Ideas are always welcome!


## Related

For a Simplest State management without Reducers or dispatch actions, check this one:

[contextAPI-demo](https://github.com/aktech27/contextAPI-demo) 


## Demo

To view a live demo of this repo, [Click Here !](https://aktech27.github.io/react-context-demo/) 

(UI is not really good, as it is mainly focussed on State management rather than good-looking)
