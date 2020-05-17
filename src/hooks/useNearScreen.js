import { useEffect, useRef, useState } from 'react'

import intersection from 'intersection-observer'

const useNearScreen = (options, once = true) => {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef(null)

  const { root, rootMargin, threshold, externalRef } = options || {}

  useEffect(() => {
    let observer

    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : intersection
    ).then(() => {
      observer = new IntersectionObserver(onChange,
        {
          threshold,
          rootMargin,
          root
        }
      )
      observer.observe(element)
    })
    return () => {
      observer && observer.disconnect()
    }
  }, [options])

  return { isNearScreen, fromRef }
}

export default useNearScreen
