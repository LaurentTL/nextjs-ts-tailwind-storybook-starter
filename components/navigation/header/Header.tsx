export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = () => {
  return <div className="text-blue-600">Hello Header!</div>;
};

export default Header;
