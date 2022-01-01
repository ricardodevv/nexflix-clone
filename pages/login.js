/*
 * @jsxImportSource @emotion/react
 */
import Image from "next/image";
import { useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/router";
import netflixLoaderIcon from "../src/pictures/Netflix_LoadTime.gif";
import Loading from "../components/Loading";
import Login from "../components/Login";

const login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.replace("/");
    return (
      <div>
        <Image src={netflixLoaderIcon} layout="fill" />
      </div>
    );
  }

  return (
    <div>
      <Loading status={status} />
      <Login status={status} />
    </div>
  );
};

export default login;

// export const getServerSideProps = async (context) => {
//   const providers = await getProviders();

//   return {
//     props: {
//       providers,
//     },
//   };
// };
