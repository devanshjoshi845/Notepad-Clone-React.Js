import { useEffect, useState } from "react";
function Create(props) {
  let [title, settitle] = useState("");
  let [content, setcontent] = useState("");

  function click() {
    let data = {
      title: title,
      content: content,
    };

    props.setalldata([...props.alldata, data]);

    settitle("");
    setcontent("");
  }
  return (
    <div className="create">
      <form className="f">
        <input
          type="text"
          name="title"
          placeholder="Title"
          autoComplete="off"
          onChange={(e) => {
            settitle(e.target.value);
          }}
          value={title}
        />

        <textarea
          name="content"
          id=""
          cols=""
          rows="10"
          placeholder="write a note..."
          value={content}
          onChange={(e) => {
            setcontent(e.target.value);
          }}
        ></textarea>
        <div className="noteplus" onClick={click}>
          +
        </div>
      </form>
    </div>
  );
}
export default Create;
/*<div className="ap">
      {alldata.map((d) => {
        <div>
          <h2>hello</h2>
          <p>{d.content}</p>
          <div className="notedelte">X</div>
        </div>;
      })}
    </div>*/