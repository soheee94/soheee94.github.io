import { useEffect } from "react";

export default function useLazyImageObserver(target) {
  useEffect(() => {
    if (!target.current) {
      return;
    }

    let observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;

          lazyImage.src = lazyImage.dataset.src;
          observer.unobserve(lazyImage);
        }
      });
    });

    observer.observe(target.current);

    return () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    };
  }, [target]);
}
