function fixLinks(){
	let linkNodes = document.querySelectorAll("a[href]");
	for(let i in linkNodes){
		let node = linkNodes[i];
		if(typeof node.tagName == "string"){
			if(typeof node.getAttribute("data-expanded-url") == "string" && node.getAttribute("data-expanded-url") != ""){
				node.href = node.getAttribute("data-expanded-url");
			} else if(typeof node.getAttribute("data-ultimate-url") == "string" && node.getAttribute("data-ultimate-url") != ""){
				node.href = node.getAttribute("data-ultimate-url");
			}
		}
	}
}
fixLinks();

let target = document.querySelector('body');

let observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		if(mutation.type == "childList"){
			fixLinks();
		}
	});
});

// configuration of the observer:
var config = {
	attributes: false,
	childList: true,
	subtree: true
};

// pass in the target node, as well as the observer options
observer.observe(target, config);

// later, you can stop observing
//observer.disconnect();
