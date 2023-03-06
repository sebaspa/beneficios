import { useEffect, useRef } from 'react'

export const useClickOutside = (
  handler: (value: React.SetStateAction<boolean>) => void
) => {
  const domNode = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const maybeHandlerClick = (event: MouseEvent) => {
      if (!domNode.current?.contains(event.target as Element)) {
        handler(false)
      }
    }
    document.addEventListener('click', maybeHandlerClick, true)

    return () => {
      document.removeEventListener('click', maybeHandlerClick)
    }
  }, [])

  return domNode
}
