"use client";
import { useRouter } from "next/navigation";

const LearnuUseRouter = () => {
  const router = useRouter();
  console.log('Router', router);
  return <div>use Router</div>;
};

export default LearnuUseRouter;
