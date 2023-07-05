// Adapted from Sololearn on July 4, 2023

class Add {
  constructor(...words) {
      this.words = words;
  }
  //your code goes here
  print(){
      let res = "$"
      for (let word of this.words){
          res += word + "$";
      }
      console.log(res);
  }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();
