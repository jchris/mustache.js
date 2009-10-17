var iterator = {
  header: function() {
    return "Colors";
  },
  item: function() {
    var item = this.items.shift();
    return item;
  },
  items: [
      {name: "red", current: true, url: "#Red"},
      {name: "green", current: false, url: "#Green"},
      {name: "blue", current: false, url: "#Blue"}
  ],
  link: function() {
    return this["current"] !== true;
  },
  list: function() {
    return this.items.length !== 0;
  },
  empty: function() {
    return this.items.length === 0;
  }
};
iterator.item.iterator = true;
