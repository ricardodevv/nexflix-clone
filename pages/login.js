/*
 * @jsxImportSource @emotion/react
 */
import Image from "next/image";
import { useRouter } from "next/router";
import netflixLoaderIcon from "../src/pictures/Netflix_LoadTime.gif";
import Loading from "../components/Loading";
import Login from "../components/Login";
import { useStateValue } from "../components/StateProvider";

const login = () => {
  const [store, dispatch] = useStateValue();
  const router = useRouter();

  if (store.user.length > 0) {
    router.replace("/");
    return (
      <div>
        <Image src={netflixLoaderIcon} layout="fill" />
      </div>
    );
  }

  return (
    <div>
      <Loading />
      <Login />
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
