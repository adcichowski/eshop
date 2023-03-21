import React, { useCallback, useState } from "react";
import { useFormState } from "react-hook-form";

export function useStarReview() {
  const [selectedStar, setSelectedStar] = useState<number | undefined>(
    undefined
  );
  const handleSelectStar = useCallback((starRate: number) => {
    setSelectedStar(starRate);
  }, []);

  const isSelectedStar = useCallback(
    (starRate: number) => (selectedStar ? starRate <= selectedStar : false),
    [selectedStar]
  );

  return {
    handleSelectStar,
    isSelectedStar,
    selectedStar,
  };
}
