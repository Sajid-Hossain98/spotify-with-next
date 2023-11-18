"use client";

import { BounceLoader } from "react-spinners";

import Box from "@/components/Box";

const Loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <BounceLoader size={40} color="#22c55e" />
    </Box>
  );
};

export default Loading;
