import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return <h1 className="text-red-600">Hello starter!</h1>;
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
