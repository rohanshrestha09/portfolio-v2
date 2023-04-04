interface Props {
  preclassname?: string;
  codeclassname?: string;
  prefix: ">" | "$" | "~";
  div?: boolean;
  children: React.ReactNode | string;
}

const Pre: React.FC<Props> = ({
  preclassname,
  codeclassname,
  prefix,
  div,
  children,
  ...props
}) => {
  return div ? (
    <div
      className={`${preclassname} inline-flex break-words leading-8 before:mr-[1.8ch] before:w-0 before:opacity-[0.5] before:content-[">"]`}
      {...props}
    >
      <code className={codeclassname}>{children}</code>
    </div>
  ) : (
    <pre
      data-prefix={prefix}
      className={`${preclassname} inline-flex break-words before:mr-[1.8ch] before:w-0 before:opacity-[0.5]`}
      {...props}
    >
      <code className={codeclassname}>{children}</code>
    </pre>
  );
};

export default Pre;
