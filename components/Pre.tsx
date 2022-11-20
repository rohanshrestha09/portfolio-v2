interface Props {
  preclassname?: string;
  codeclassname?: string;
  children: JSX.Element | string;
}

const PreTag: React.FC<Props> = (props) => {
  const { preclassname, codeclassname, children } = props;

  return (
    <pre className={preclassname} {...props}>
      <code className={codeclassname}>{children}</code>
    </pre>
  );
};

export default PreTag;
