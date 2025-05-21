import { useEffect, useState } from "react";

type UseCountdownOptions = {
  startValue: number;
  duration?: number;
  interval?: number;
  formatNumber?: boolean;
};

export const useCountdown = ({
  startValue,
  duration = 20000,
  interval = 50,
  formatNumber = true,
}: UseCountdownOptions) => {
  const [counter, setCounter] = useState(startValue);
  const totalSteps = duration / interval;

  useEffect(() => {
    let step = 0;
    let timeoutId: number;

    const animate = () => {
      step++;
      const progress = Math.min(step / totalSteps, 1);
      const currentValue = Math.round(startValue * (1 - progress));

      setCounter(currentValue);

      if (progress < 1) {
        timeoutId = setTimeout(animate, interval);
      }
    };

    timeoutId = setTimeout(animate, interval);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [startValue, duration, interval, totalSteps]);

  return formatNumber ? counter.toLocaleString("en-US") : counter;
};
