export function Entry(title, body) {
  this.title = title;
  this.body = body;
}
Entry.prototype.wordCount = function() {
  if (this.body == "") {
    return 0;
  }
  return this.body.split(" ").length;
};
Entry.prototype.vowelCounter = function() {
  if (this.body == "") {
    return 0;
  }
  return this.body.match(/[aeiou]/gi).length;
};
Entry.prototype.consonantCounter = function() {
  if (this.body == "") {
    return 0;
  }
  return this.body.match(/[b-df-hj-np-tv-z]/gi).length;
};