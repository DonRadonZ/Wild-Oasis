import { useEffect, useRef } from "react";

function useOutsideClick(handler: any, listenerCapturing = true) {
    const ref: any = useRef();


  useEffect(function() {
    function handleClick(e: Event) {
      if(ref.current && !ref.current.contains(e.target)){ handler();
      }
    }

    document.addEventListener('click', handleClick, true)

    return () => document.removeEventListener("click", handleClick, listenerCapturing)
  }, [handler,listenerCapturing]
);

  return ref;
}

export default useOutsideClick
