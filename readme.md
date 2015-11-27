#ninja

Ninja is a knockout component library based on bootstrap css.

http://smeijeri.github.io/ninja

##api reference

# ninja
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
# accordion
# nav-tabs
# form-group
# form-group
# nested-repeater
This component kan repeat nested data.It will turn this into a configurable unordered list.

**Example**  
```js
//javascript viewModel
var viewModel = { items: [
		{
			header: "Item1",
			items: [ {	header: "Item1.1" }, {	header: "Item1.2" }]
		},
		{
			header: "Item2",
			items: [ {	header: "Item2.1" }, {	header: "Item2.2" }]
		}
	]};

//html

<nested-repeater params="viewModel: viewModel"></nested-repeater>
```
<a name="module_nested-repeater..viewModel"></a>
### nested-repeater~viewModel
**Kind**: inner typedef of <code>[nested-repeater](#module_nested-repeater)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| items | <code>array</code> | The items to repeat |

<a name="module_nested-repeater..params"></a>
### nested-repeater~params
**Kind**: inner typedef of <code>[nested-repeater](#module_nested-repeater)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| viewModel | <code>nested-repeater~viewModel</code> | Te model containing the items |
| itemTemplate | <code>string</code> | An alternative template to print the item header |

# ninja-table
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
<a name="module_ninja-table..params"></a>
### ninja-table~params
**Kind**: inner typedef of <code>[ninja-table](#module_ninja-table)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| items | <code>array</code> | The items that contain the rows |
| columns | <code>array</code> | An array defining how the row items should be interperted |
| showHeader | <code>bool</code> | Should it show a header row, this requires the columns property to be set |
| onSelectItem | <code>function</code> | What function should be called when the user clicks a row |

