import { useState, useEffect, useCallback } from 'react';
import { useCollection, useFirebase } from '../../firebase/useFirebase';
import LoadingSpinner from '../../component/Spinner';
import { useRouter } from 'next/router';
import PetProfile from '../../component/pet/petProfile';

const Pet = () => {
  const router = useRouter();
  const petId = router.query.petId;
  const {data} = useCollection("Pets", petId)
  // const router = useRouter();
  // const { getSingleData } = useFirebase('Pets');
  // const [petData, setPetData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const petId = router.query.petId;

  // useEffect(() => {
  //   setIsLoading(true);
  //   (async () => {
  //     try {
  //       const result = await getSingleData(petId);
  //       setIsLoading(false);
  //       setPetData(result);
  //     } catch (error) {}
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [petId]);

  return (
    <div>
      {/* <LoadingSpinner open={isLoading} /> */}
      <PetProfile data={data} />
    </div>
  );
};

export default Pet;
