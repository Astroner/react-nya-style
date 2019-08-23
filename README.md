React-nya-style is official package to let you use nya-style library in reactjs

---

### install
> npm i -\-save react-nya-style

---
### Usage
At first, you should initialize nya-style
```javascript
import Style from 'nya-style'
let nya = Style();
```
Ok. Then you need to import NyaProvider from "react-nya-style"
```javascript
import { NyaProvider } from 'react-nya-style'
```
Finally, use the render() method.
```javascript
import React from 'react'
import { render } from 'react-dom'

render((
	<NyaProvider nya={nya}>
		<App />
	</NyaProvider>
), document.querySelector("#root"))
```
#### Full code
```javascript
import React from 'react'
import { render } from 'react-dom'

import Style from 'nya-style'
import { NyaProvider } from 'react-nya-style'

import App from './App.jsx'

let nya = Style();

render((
	<NyaProvider nya={nya}>
		<App />
	</NyaProvider>
), document.querySelector("#root"))
```
---

### CSS in JS
Creating some nya-css code.
```javascript
let mainStyles = {
	borderRadius: 10,
	boxShadow: ["initial", .3],
	":hover":{
		boxShadow: "0 0 10 0 rgba(0,0,0,.5)"
	}
}
```
But how I can bind it with my App?
addRoot(). That is what you need.
```javascript
import { addRoot } from 'react-nya-style'
addRoot(".main", styles);
```
addRoot() add "styles" to the root(no context).
##### params:
1. selector: String. Name for your styles
2. styles: object. Styles for parsing

### Binded styles
But what if I do not want to add style to global scope?
**useNya()** is your answer.

```javascript
import React from 'react'
import { useNya } from "react-nya-style"

let styles = {
	background: ["white", .3],
	color: ["black", .3]
	":hover":{
		background: "black",
		color: "white"
	}
}

const MyComponent = props=>(
	<div className="my_component">
		Hello The Universe!
	</div>
)
MyComponent = useNya(styles, MyComponent);
export { MyComponent }
```
As you can see, we bind styles and your component together, but 1 rule.
It should be component itself(no connect, useStyles, withWidth or any alse). Why? Name. We need a name to put them together and thing like connect() destroys names.
#### Then
Ok, Eugine. We did it. We used all functions. How I can use my styles?

Some code. Again...
```javascript
import { addRoot } from 'react-nya-style'
import { MyComponent } from './MyComponent.jsx'
let OtherStyle = {
	".my_component": descr=>descr.nya(MyComponent)
}
addRoot(".other", OtherStyle);
```
That is all. You just import your component and pass it to descr.nya() method.

### Conclusion
Ok. Why I write this package and who should use it?
React developers. Before this lib I was writing 2 things in each **.jsx** file.

1. Component
2. ComponentStyle

Then I exported them and imported them in other file. 10 times, 20 times.
Oh, and also I always had root **.js** file, where I imported all root styles and was passing them to root object. Then I imported root from **styles.js** and was passing it to Style() function. So boring. This running between folders takes so much time.
With **react-nya-style** I do not need root **.js** file, I just use addRoot().
I do not need to export ComponentStyle, instead i use useNya()