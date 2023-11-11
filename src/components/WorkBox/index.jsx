import "./index.scss";

// eslint-disable-next-line react/prop-types
const WorkBox = ({ onClick }) => {
  return (
    <div className=" ">
      <h2 className="pTag br-s mb-l fs-7">App is running.</h2>
      <p className="">You can see this text just on desktop</p>
      <button className="button" onClick={onClick}>
        Click here
      </button>
    </div>
  );
};

export default WorkBox;
