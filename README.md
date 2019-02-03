##### Git Pull for Specific Project

    ```
    git init

    git config core.sparsecheckout true

    echo react-cra/ >> .git/info/sparse-checkout

    git remote add -f origin https://github.com/patelmahesh6/React.git

    git pull origin master

    git update-index --no-skip-worktree README.md

    ```

##### React NutShell

- React DOM uses camelCase property naming convention instead of HTML attribute names.
  For example, class becomes className in JSX, and tabindex becomes tabIndex.
- React elements are immutable. Once you create an element, you can’t change its children or attributes
- Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
- React treats components starting with lowercase letters as DOM tags.

##### Props are Read-Only

- In ReactJS we use props to send data to components.
- In ReactJS every component is treated as a pure javascript function.
- In ReactJS props are equivalent to parameters of a pure javascript function.
- Props are immutable. Because these are developed in the concept of pure functions. In pure functions we cannot change the data of parameters. So, also cannot change the data of a prop in ReactJS.

##### Stateless ReactJS Component

- All function based components can be considered as stateless ReactJS components.
- Stateless ReactJS Components are pure javascript functions so, we don’t need to have state.

##### Stateful ReactJS Component

- All class based components can be considered as stateful ReactJS components.
- Stateful ReactJS Components inherits the class React.Component so, state get’s inherited.

##### State 

##### Mounting

These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()


