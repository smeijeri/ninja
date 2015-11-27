#ninja

Ninja is a knockout component library based on bootstrap css.

http://smeijeri.github.io/ninja

##api reference

### ninja
This is the main wrapper for the ninja components.

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