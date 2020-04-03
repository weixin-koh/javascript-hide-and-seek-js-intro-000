function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested").querySelector(".target");
}

function increaseRankBy(n) {
  var lists = document.querySelectorAll(".ranked-list");

  for (let i = 0; i < lists.length; i++) {
    var ranks = lists[i].children;

    for (let j = 0; j < ranks.length; j++) {
      ranks[j].innerHTML = parseInt(ranks[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  var node = document.querySelector("#grand-node");

  while (node.children[0] != null) {
    node = node.children[0];
  }

  return node;
}
