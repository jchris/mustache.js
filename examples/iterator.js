var my_items = [
    {name: "red",   url: "#Red"},
    {name: "green", url: "#Green"},
    {name: "blue",  url: "#Blue"}
];

var i = 0;
function nextItem() {
  var item = my_items[i];
  i++;
  return item;
}
nextItem.iterator = true;

var iterator = {
  header: function() {
    return "Colors";
  },
  items: nextItem,
  items_array : my_items
};
