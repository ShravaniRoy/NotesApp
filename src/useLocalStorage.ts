import { useState } from "react";

export function useLocalStorage<T>(key: string,
     initialValue: T | (()=> T)){ //initial val could be of type T or a function returning type T
    //here T is a generic type that could be a tag or a note
 const [value, setValue] = useState<T>(() => { //we are using function to check if we already have localstorage
    const jsonVal = localStorage.getItem(key);
    if(jsonVal == null){
        if(typeof initialValue == 'function'){
            return (initialValue as () => T)() //because ts doesn't know if we are returning a callable function 
        } else {
            return initialValue
        }
    } else {
        return JSON.parse(jsonVal);
    }
 });

 return [value, setValue] as [T, typeof setValue]
}

