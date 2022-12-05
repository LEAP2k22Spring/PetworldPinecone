import { useState, useEffect, useCallback } from "react";
import { useCollection, useFirebase } from "../../firebase/useFirebase";
import LoadingSpinner from "../../component/Spinner";
import { useRouter } from "next/router";
import PetProfile from "../../component/pet/petProfile";

const Pet = () => {
  const router = useRouter();
  const petId = router.query.petId;
  const { data } = useCollection("Pets", petId);

  return (
    <div>
      {/* <LoadingSpinner open={isLoading} /> */}
      <PetProfile data={data} />
    </div>
  );
};

export default Pet;
