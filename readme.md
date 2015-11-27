#ninja

Ninja is a knockout component library based on bootstrap css.

http://smeijeri.github.io/ninja

##why ninja?

Both bootstrap and knockout are powerfull tools. But sometimes there can be a lot of ceremony in creating for instance a accordion UI.
Ninja aims to take a way some of this pain. 

Thanks to the knockout custom components things that used to take a lot of work are now a breeze.

##semantics

Next to trying to make things easier to define. Ninja tries to make bootstrap more semantic.
Because all components work from custom tags things like ```<div class="form-group">``` become ```<form-group>```

##getting started

To install the package;

``` bower install https://github.com/smeijeri/ninja.git ```

Or; 

``` bower intall ninja-js ```

The later for some reason that I don't understand doesn't install the dependencies.

#api reference

## ninja
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
**Example**  
```js
define([
    "knockout",
    "knockout-validation",
    "ninja"
], function(ko) {
	
});
```
## accordion
The accordion components makes creating an accordion as easy as just placing multiple divs on you page

**Example**  
```js
<accordion>
    <panel class="active" title="Accordion panel 1">
       <p>
           Domestic confined any but son bachelor advanced remember. How proceed offered her offence shy forming. Returned peculiar pleasant but appetite differed she. Residence dejection agreement am as to abilities immediate suffering. Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.
        </p>
    </panel>
    <panel title="Accordion panel 2">
        <p>
            nim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
       </p>
    </panel>
    <panel title="Accordion panel 3">
        <p>
            Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her. Alone all happy asked begin fully stand own get. Excuse ye seeing result of we. See scale dried songs old may not. Promotion did disposing you household any instantly. Hills we do under times at first short an. 
        </p>                
    </panel>
    
</accordion>
```
## nav-tabs
The nav-tabs component makes creating an tabbed interface as easy as just placing multiple divs on you page

**Example**  
```js
<nav-tabs>
    <panel class="active" title="Tab panel 1">
       <p>
           Domestic confined any but son bachelor advanced remember. How proceed offered her offence shy forming. Returned peculiar pleasant but appetite differed she. Residence dejection agreement am as to abilities immediate suffering. Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.
        </p>
    </panel>
    <panel title="Tab panel 2">
        <p>
            nim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
       </p>
    </panel>
    <panel title="Tab panel 3">
        <p>
            Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her. Alone all happy asked begin fully stand own get. Excuse ye seeing result of we. See scale dried songs old may not. Promotion did disposing you household any instantly. Hills we do under times at first short an. 
        </p>                
    </panel>
    
</nav-tabs>
```
## form-group
The form-group component takes a way on the ceremony of creating a bootstrap form-group

**Example**  
```js
<form-group params="value: ko.observable(), label: 'MyField'"></form-group>
```
**Example**  
```js
<form-group params="value: ko.observable(), label: 'MyField', controlTemlate: 'id-to-my-control-template'"></form-group>
```
## nested-repeater
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

## ninja-table
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

