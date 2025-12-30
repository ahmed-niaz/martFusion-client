import Navbar from "@/components/shared/Navbar";

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Home;
