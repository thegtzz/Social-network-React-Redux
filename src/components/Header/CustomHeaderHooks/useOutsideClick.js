import React, {useRef, useState, useEffect} from "react";


export const useOutsideClick = (initialValue) => {
    const ref = useRef(null)
    const [showMenu, setShowMenu] = useState(initialValue)

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) setShowMenu(false)
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [ref])

    return {showMenu, setShowMenu, ref}
}