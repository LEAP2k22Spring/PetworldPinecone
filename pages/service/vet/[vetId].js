import React from "react";
import { useCollection } from "../../../firebase/useFirebase";
import { useRouter } from "next/router";
import VetProfile from "../../../component/vetProfile";

const Vet = () => {
  const router = useRouter();
  const vetId = router.query.vetId;
  const { data } = useCollection("Vets", vetId);

  return (
    <div>
      <VetProfile data={data} />
    </div>
  );
};

export default Vet;
