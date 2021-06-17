let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

   function domainName() {
let myArray= []
    for (let i = 0; i < pronoun.length; i++) {
      
        for (let j = 0; j < adj.length; j++) {
            
            for (let n = 0; n < noun.length; n++) {
                 
                myArray.push(pronoun[i] + adj[j] + noun[n] + ".com <br>");            
            }
        }
        
    }
    document.querySelector('.name').innerHTML= myArray
 }