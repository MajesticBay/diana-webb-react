import TopScreen from '../components/TopScreen';
import MeetDiana from '../components/MeetDiana';
import BookOrder from '../components/BookOrder';
import BookDescription from '../components/BookDescriptoin';
import Awards from '../components/Awards';
import Testimonials from '../components/Testimonials';
import BookMemos from '../components/BookMemos';

const Home = () => {
  return (
    <>
      <TopScreen />
      <MeetDiana />
      {/* <BookOrder
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        orderRef={orderRef}
      /> */}
      <BookOrder />
      {/* <BookDescription handleScroll={handleScroll} /> */}
      <BookDescription />
      <Awards />
      <Testimonials />
      {/* <BookMemos handleScroll={handleScroll} /> */}

      <BookMemos />
    </>
  );
};

export default Home;
