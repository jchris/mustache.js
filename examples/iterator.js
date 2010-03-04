var items = [
    {name: "red",   url: "#Red"},
    {name: "green", url: "#Green"},
    {name: "blue",  url: "#Blue"}
];

function nextItem() {
  return items.shift();
}
nextItem.iterator = true;

var iterator = {
  header: function() {
    return "Colors";
  },
  item: nextItem
};
