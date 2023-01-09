interface Props {
  preclassname?: string;
  codeclassname?: string;
  div?: boolean;
  children: JSX.Element | string;
}

const PreTag: React.FC<Props> = (props) => {
  const { preclassname, codeclassname, div, children } = props;

  return div ? (
    <div className={preclassname} {...props}>
      <code className={codeclassname}>{children}</code>
    </div>
  ) : (
    <pre className={preclassname} {...props}>
      <code className={codeclassname}>{children}</code>
    </pre>
  );
};

export default PreTag;
