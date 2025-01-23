import React, {useState, useEffect} from "react";

const Child = () =>{

  useEffect(() => {
    console.log('я родился')

    return () => {
        console.log('я ушел')
        };
  }, [])
}

export default Child;  