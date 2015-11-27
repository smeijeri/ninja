#ninja

Ninja is a knockout component library based on bootstrap css.

http://smeijeri.github.io/ninja

##api reference

### ninja
This is the main wrapper for the ninja components.You can use every individual components seperatly,but if you include the ninja module. All component loading will be configured for you

**Example**  
```js
requirejs.config({
    shim : {
        "bootstrap" : { "deps" :['jquery'] }
    },    
    paths: {
        jquery: "bower_components/jquery/dist/jquery.min",
        knockout: "bower_components/knockout/dist/knockout",
        "knockout-validation": "bower_components/knockout-validation/dist/knockout.validation.min",
        bootstrap: "bower_components/bootstrap/dist/js/bootstrap.min",
        text: "bower_components/text/text",
        css: "bower_components/require-css/css.min",
        ninja : "bower_components/ninja/dist/ninja.min"
    }
});
```
### accordion
### form-group
### nav-tabs
### form-group
### ninja-table
This component renderes a table, based on a viewModel that contains items.

**Example**  
```js
<ninja-table params="
	items: users, 
	columns : [ 
		{ name: 'id', label: 'Id' }, 
		{ name: 'name', label: 'Displayname' },
		{ name: 'description', label: 'Description' } 
	], 
	showHeader: true,
	onSelectItem: onSelectUser
	">
</ninja-table>
```
