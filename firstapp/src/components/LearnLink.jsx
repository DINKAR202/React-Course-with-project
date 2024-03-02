import Link from "next/link";

const LearnLink = () => {
  return (
    <>
      <Link href="/admin/dashboard">Go to the Admin Dashboard</Link>
      {/* <Link href={`/user/profile/${id}`}>Go to the user profile</Link> */}
    </>
  );
};

export default LearnLink;
