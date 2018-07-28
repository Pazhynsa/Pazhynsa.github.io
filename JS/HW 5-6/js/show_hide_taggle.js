// alert('works');



/* function getRealDisplay(elem) {
	if (elem.currentStyle) {
		return elem.currentStyle.display
	} else if (window.getComputedStyle) {
		var computedStyle = window.getComputedStyle(elem, null )

		return computedStyle.getPropertyValue('display')
	}
}

function hide(el) {
	if (!el.getAttribute('displayOld')) {
		el.setAttribute("displayOld", el.style.display)
	}

	el.style.display = "none"
}

displayCache = {}

function isHidden(el) {
	var width = el.offsetWidth, height = el.offsetHeight,
		tr = el.nodeName.toLowerCase() === "tr"

	return width === 0 && height === 0 && !tr ?
		true : width > 0 && height > 0 && !tr ? false :	getRealDisplay(el)
}

function toggle(el) {
	isHidden(el) ? show(el) : hide(el)
}


function show(el) {

	if (getRealDisplay(el) != 'none') return

	var old = el.getAttribute("displayOld");
	el.style.display = old || "";

	if ( getRealDisplay(el) === "none" ) {
		var nodeName = el.nodeName, body = document.body, display

		if ( displayCache[nodeName] ) {
			display = displayCache[nodeName]
		} else {
			var testElem = document.createElement(nodeName)
			body.appendChild(testElem)
			display = getRealDisplay(testElem)

			if (display === "none" ) {
				display = "block"
			}

			body.removeChild(testElem)
			displayCache[nodeName] = display
		}

		el.setAttribute('displayOld', display)
		el.style.display = display
	}
}
 */



// console.log('elem', elem);

// function hider(elem) {
// 	var elem = document.querySelector('input');
	
// 	if(elem.classname === undefined) {
// 		elem.classList.add('hide');
// 		console.log('elem.className', elem.className); 
// 	} else {
// 		elem.classList.remove('hide');
// 	}
	
// };

// elem = document.querySelector('input');
// elem.addEventListener('click', hider);


var i;

function chenger(el) {
	var el = document.querySelector('input');
	// console.log(el.attr(value));

	for (i = 2; i < 20;) {
		if(i % 2 === 0) {
			el.removeAttribute('value');
			console.log(el);
			// console.log('i = ', i);
		} else {
			el.setAttribute('value', 'hide me!');
			console.log(el);
		}
		++i
		console.log('i = ', i);
		break
	}
	
	// if(el.setAttribute('value') === undefined) {
		// } else {
			// };
}	
elem = document.querySelector('input');
elem.addEventListener('click', chenger); 