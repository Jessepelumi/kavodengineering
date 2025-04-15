export const Overlay = () => {
  return (
    <div className="absolute z-10 inset-0 bg-gradient-to-b from-transparent via-base-black via-85% to-base-black"></div>
  );
};

export const BlackOverlay = () => {
  return <div className="absolute z-10 inset-0 bg-base-black-60"></div>;
};

export const BlurOverlay = () => {
  return (
    <div className="absolute z-10 inset-0 bg-gradient-to-b from-transparent via-base-black-40 to-base-black via-60%"></div>
  );
};
