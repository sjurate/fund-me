import { useContext } from "react";
import StoriesAdminContext from "../../Contexts/StoriesAdminContext";

function LineSA({ storie }) {
  const { setEditData, setDeleteData } = useContext(StoriesAdminContext);

  const remove = () => {
    setDeleteData({ id: storie.id });
  };

  const approve = () => {
    setEditData({ id: storie.id, status: 1 });
  };

  return (
    <li className="list-group-item">
      <div className="home__content__info">
        <h2>{storie.title}</h2>
        {storie.image ? (
          <div className="img-bin">
            <img src={storie.image} alt={storie.title}></img>
          </div>
        ) : null}
        <div>{storie.amount_wanted}</div>
        <div>{storie.info}</div>
        <div>{storie.status ? "Approved" : "Not approved"}</div>
      </div>
      <div className="button-box">
        <button
          onClick={approve}
          type="button"
          className="btn btn-outline-success"
        >
          Approve
        </button>
        <button
          onClick={remove}
          type="button"
          className="btn btn-outline-danger"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default LineSA;
