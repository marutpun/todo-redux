# Todo List with Redux

A todo list app with ReactJS, Redux and Redux Thunk

Demo: https://jovial-elion-8ab006.netlify.app

To run local deployment. Please install [json-server](https://github.com/typicode/json-server 'json-server').

## Newbie notes

To use Redux-Thunk. You must

1.  Create a function and return a function
2.  Insert `dispatch()` at last.

Example

```
export function getData() {
  return async function (dispatch) {
    const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch(fetchInit(result.data));
  };
}
```

3. Use `useEffect()` and run `dispatch(getData())` NOT ~~`dispatch(fetchInit())`~~
