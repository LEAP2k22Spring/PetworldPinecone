import { useCollection } from "../../firebase/useFirebase";
import { useRouter } from "next/router";
import { PetProfile } from "../../component/pet";

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
