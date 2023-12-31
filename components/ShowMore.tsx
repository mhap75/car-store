"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { Button } from "@/components";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    //
    // const newPathName = updateSearchParams("limit", newLimit.toString());
    //
    // router.push(newPathName)
    setLimit(newLimit);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          title="Show more"
          containerStyle="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
          type="button"
        />
      )}
    </div>
  );
};

export default ShowMore;
