import Header from '@/app/layouts/Header';
import Footer from '@/app/layouts/Footer';

const MainLayout = (props: any) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
