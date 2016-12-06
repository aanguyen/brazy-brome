walk(document.body);
 
function walk(node) {
 
    var child, next;
 
    switch (node.nodeType) {
        case 1: // Element
        case 9: // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
 
        case 3: // Text node
            if (node.parentElement.tagName.toLowerCase() != "script") {
                brazify(node);
            }
            break;
    }
}
 
function brazify(textNode) {
	//Something wrong with logic in this function. Script stops brazifying as soon as non-brazy sound is encountered
    var v = textNode.nodeValue;
	if (v.match(/ck/g)) {
		v = v.replace("ck", "b");
	}
	else if (v.match(/sc/gi)||v.match(/ch/gi)) {
		//The SC and CH sounds aren't brazy, my dudes
	}
    else {
		v = v.replace(/c/g, "b");
		v = v.replace(/C/g, "B");
	}

	
    textNode.nodeValue = v;
}
