interface Props {
  preClassName?: string;
  codeClassName?: string;
  children: JSX.Element | string;
}

const PreTag: React.FC<Props> = (props) => {
  const { preClassName, codeClassName, children } = props;

  return (
    <pre className={preClassName} {...props}>
      <code className={codeClassName}>{children}</code>
    </pre>
  );
};

export default PreTag;
