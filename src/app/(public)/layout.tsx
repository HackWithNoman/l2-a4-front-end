import Footer from "@/components/public/home/footer";
import Navbar from "@/components/public/home/navbar";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default PublicLayout;
