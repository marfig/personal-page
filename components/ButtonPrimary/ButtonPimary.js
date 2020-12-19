export default function ButtonPimary(props) {
  const { children, ...rest } = props;

  return (
    <button className="btn-primary" {...rest}>
      {children}
    </button>
  );
}
