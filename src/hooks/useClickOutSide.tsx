import { useEffect, useRef } from "react";

export const useClickOutside = (
  handler: (value: React.SetStateAction<boolean>) => void
) => {
  let domNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let maybeHandlerClick = (event: MouseEvent) => {
      if (!domNode.current?.contains(event.target as Element)) {
        handler(false);
      }
    };
    document.addEventListener("click", maybeHandlerClick, true);

    return () => {
      document.removeEventListener("click", maybeHandlerClick);
    };
  }, []);

  return domNode;
};
