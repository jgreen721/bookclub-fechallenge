import React, {useEffect,useState} from 'react'

const useObserver = (el) => {
    const [isVisible,setIsVisible] = useState(false);

    const observeElement = (entries)=>{
        // console.log("Entries",entries);
        // console.log(entries[0].isVisible);
        if(entries[0].isIntersecting){
            // console.log("show element!!!!")
            setIsVisible(true)
        }
        else{
            // console.log("hide element")
        }
    }
    const observer = new IntersectionObserver(observeElement);

    useEffect(()=>{
        // console.log("useEffect fired--")
        if(el?.current){
            console.log('attaching element')
            observer.observe(el.current);
        }
    })

    return isVisible
}

export default useObserver