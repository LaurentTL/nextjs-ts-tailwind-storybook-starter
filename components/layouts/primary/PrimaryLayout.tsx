import Head from 'next/head';
import Header from '../../navigation/header/Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>NextJs TS/Tailwind/StoryBook Starter</title>
      </Head>
      <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
        <Header />
        <main className="px-5">{children}</main>
        <div className="m-auto" />
      </div>
    </>
  );
};

export default PrimaryLayout;
