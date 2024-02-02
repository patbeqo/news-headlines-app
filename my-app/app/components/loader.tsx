'use client';

import { useInView } from "react-intersection-observer";

interface ILoaderProps {
  loadMore: () => void;
}

export function Loader({ loadMore }: ILoaderProps) {
  const { ref, inView } = useInView();

  if (inView) {
    loadMore();
  }

  return (
    <div ref={ref} className="col-span-4">
      Loading...
    </div>
  );
}