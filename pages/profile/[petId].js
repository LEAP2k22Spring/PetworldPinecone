import { useState, useEffect, useCallback } from 'react';
import { useFirebase } from '../../firebase/useFirebase';
import LoadingSpinner from '../../component/Spinner';
import { useRouter } from 'next/router';
import { PetProfile } from '../../component/pet';

const Pet = () => {
  return (
    <div>
      {/* <LoadingSpinner open={isLoading} /> */}
      <PetProfile />
    </div>
  );
};

export default Pet;
