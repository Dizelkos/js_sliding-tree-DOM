var e=document.querySelector(".tree");document.querySelectorAll("li").forEach(function(e){var n=document.createElement("span");e.prepend(n),n.append(n.nextSibling)}),e.addEventListener("click",function(e){var n=e.target.closest("li");if(n){var t=n.children[1];t&&(t.hidden=!t.hidden)}});
//# sourceMappingURL=index.176ecf18.js.map
