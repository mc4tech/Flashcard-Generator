// Constructor function for the 'Cloze Card'.
function ClozeCard(text, cloze) {
   
  //   if (!(this instanceof BasicCard)) {
  //   return new BasicCard(front, back);
  // }
    this.text = text.split(cloze);
    this.cloze = cloze;

};

// Constructor that creates a prototype of ClozeCard to return the question missing cloze
function ClozeCardPrototype() {

    this.clozeRemoved = function () {
        return `${this.text[0]} ... ${this.text[1]}`;  
    };											
};

ClozeCard.prototype = new ClozeCardPrototype();	

module.exports = ClozeCard; 