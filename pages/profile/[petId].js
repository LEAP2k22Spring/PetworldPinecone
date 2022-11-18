import { useState, useEffect } from "react";
import { useFirebase } from "../../firebase/useFirebase";
import LoadingSpinner from "../../component/Spinner";
import { useRouter } from "next/router";
import { PetProfile } from "../../component/pet";

const Pet = () => {
  const router = useRouter();
  const { getSingleData } = useFirebase("Pets");
  const [petData, setPetData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const petId = router.query.petId;
    setIsLoading(true);
    (async () => {
      try {
        const result = await getSingleData(petId);
        setIsLoading(false);
        setPetData(result);
      } catch (error) {}
    })();
  }, [getSingleData, router.query.petId]);

  return (
    <div>
      <LoadingSpinner open={isLoading} />
      <PetProfile petData={petData} />
    </div>
  );
};

export default Pet;
