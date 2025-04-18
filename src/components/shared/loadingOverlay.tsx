import CircularProgress from "@mui/material/CircularProgress";

export const LoadingOverlay = () => {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-base-white backdrop-blur-2xl">
      <CircularProgress size={70} thickness={3} color="inherit" />
    </div>
  );
};
