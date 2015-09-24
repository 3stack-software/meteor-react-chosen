react-chosen
--------------------------

Wraps `eskan:chosen`, so you can just `<ReactChosen />` and be done with it.

Usage
================

```
meteor add 3stack:react-chosen
```

Example
================


```jsx
<ReactChosen
    chosenOpts={{disable_search_threshold:1}}
    selectProps={{className: 'form-control chosen-select', multiple:'multiple'}}
    value={['a','b','c']}
    options={[
      {value:'a', label:'A label'},
      {value:'b', label:'B label'},
      {value:'c', label:'C label'}
     ]}
   onChange={this.onChange}
/>
```
