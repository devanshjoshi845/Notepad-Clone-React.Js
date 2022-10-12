import React from "react";

const Show = (props) => {
  const deletenote = (title) => {
    let newdata = props.alldata.filter((d) => d.title !== title);

    props.setalldata(newdata);
  };

  let items = props.alldata.map((d) => {
    return (
      <div className="ap">
        <h3>{d.title}</h3>
        <p>{d.content}</p>
        <div className="notedelte" onClick={() => deletenote(d.title)}>
          X
        </div>
      </div>
    );
  });

  return <div>{items}</div>;
};

export default Show;
