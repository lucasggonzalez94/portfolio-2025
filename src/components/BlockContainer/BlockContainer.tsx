interface BlockContainerProps {
  children: React.ReactNode;
}

const BlockContainer = ({ children }: BlockContainerProps) => {
  return <div className="min-h-screen w-full">{children}</div>;
};

export default BlockContainer;
