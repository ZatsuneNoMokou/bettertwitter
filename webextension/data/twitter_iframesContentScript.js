let body = document.querySelector("body");

let playerFrames = /https:\/\/twitter\.com\/i\/cards\/.*\?cardname\=player&.*/;
if(playerFrames.test(location.href) == true){
	let dataNode = document.querySelector("script[type*=twitter-cards-serialization]");
	let data = JSON.parse(dataNode.textContent);
	let url = data.card.card_url;
	
	let node = document.querySelector(".SummaryCard-contentContainer .SummaryCard-content");
	
	let linkNode = document.createElement("a");
	linkNode.href = url;
	linkNode.target = "_blank";
	linkNode.textContent = url
	
	node.appendChild(linkNode);
}
let videoFrame = /https:\/\/twitter\.com\/i\/videos\/tweet\/.*/;
if(videoFrame.test(location.href) == true){
	let observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if(mutation.type == "childList"){
				let videoNode = document.querySelector("video");
				if(videoNode != null){
					videoNode.preload = "none";
					videoNode.autoplay = false;
					videoNode.controls = true;
					
					let previewNode = document.querySelector(".poster-image-container .poster-image");
					if(previewNode !== null && previewNode.style.backgroundImage != ""){
						videoNode.style.backgroundImage = previewNode.style.backgroundImage;
					}
				}
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
	observer.observe(body, config);
}
