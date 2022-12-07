import dynamic from "next/dynamic";

const Map = () => {
  const LeafletMap = dynamic(
    () => import("../../../component/map/LeafletMap"),
    { ssr: false }
  );

  return <LeafletMap />;
};

export default Map;
