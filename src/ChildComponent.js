import React, {useEffect} from "react";

export default React.memo((props) => {
  const {title} = props;
  console.log("child loaded");

  useEffect(() => {
    props.foo(`${title}`);
  }, [title]);
  // when title changes, useEffect will run

  return (
    <div>
      <h1>{title}</h1>
      <p>{props.children}</p>
    </div>
  );
});
