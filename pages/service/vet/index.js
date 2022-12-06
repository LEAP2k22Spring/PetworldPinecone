import React, { useEffect, useState } from "react";
import Image from "next/image";
import classes from "../../../styles/service.module.css";
import { Grid, Stack, Typography } from "@mui/material";
import { db } from "../../../firebase/useFirebase";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";

const Vet = () => {
  const router = useRouter();
  const [vetData, setVetData] = useState([]);

  useEffect(() => {
    const getVetData = async () => {
      const querySnapshot = await getDocs(collection(db, "Vets"));
      querySnapshot.forEach((doc) => {
        setVetData([...vetData, { ...doc.data(), docId: doc.id }]);
      });
    };
    getVetData();
    console.log(vetData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack
      className=""
      direction="column"
      justifyContent="center"
      alignItems={"center"}
      m={5}
    >
      {/* TITLE */}
      <div className="">
        <h1>VET</h1>
      </div>
      {/* CENTER */}
      <main className={classes.centerColumn}>
        <Grid
          container
          spacing={5}
          m={0}
          justifyContent="center"
          sx={{ cursor: "pointer" }}
        >
          {vetData.map((vet, i) => {
            return (
              <Grid item key={i}>
                <div className={classes.imgContainer}>
                  <div>{vet?.time}</div>
                  <Image
                    src={vet?.photoURL}
                    layout="fill"
                    objectFit="cover"
                    alt="vet"
                    onClick={() => router.push(`/service/vet/${vet.docId}`)}
                  />
                  <div className={classes.title_wrapper}>
                    <p className={classes.title}>{vet?.name}</p>
                    <p>{vet?.location}</p>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </main>
    </Stack>
  );
};

export default Vet;
