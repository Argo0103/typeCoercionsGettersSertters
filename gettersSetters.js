const obj = {
   
    get name(){
        return obj._name
    },

    set name(value){
        const items = value.split(", ")
        
        items.map((elem) => {
            if(typeof elem === "string" && elem.length > 2){
                obj._name.push([elem, elem.length])
            }
        })
    }   
}
Object.defineProperty(obj , "_name" , {
    value: [],
    writable: true,     
    
  }),


obj.name = 'Artak, Artavazd, Samvel';

console.log(obj.name) 

console.log(  valueOf in null  );