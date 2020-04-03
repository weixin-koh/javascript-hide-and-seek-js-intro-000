function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested").querySelector(".target");
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll(".ranked-list > li");

  for (let i = 0; i < ranks.length; i++) {
    var value = parseInt(ranks[i].innerHTML);
    ranks[i].innerHTML = value + n;
  }
}

function deepestChild() {
  var node = document.querySelector("div#grand-node");

  while (node.querySelector("div") != null) {
    node = node.querySelector("div");
  }

  return node;
}
