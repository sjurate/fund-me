import { useContext } from "react";
import StoriesUserContext from "../../Contexts/StoriesUserContext";

function LineS({ storie }) {
  const { setDeleteData, setModalData } = useContext(StoriesUserContext);

  return (
    <li className="list-group-item">
      <div className="line">
        <div className="line__content">
          <div className="line__content__info">
            {storie.image ? (
              <div className="img-bin">
                <img src={storie.image} alt={storie.title}></img>
              </div>
            ) : (
              <span className="red-image">No image</span>
            )}
          </div>
          <div className="line__content__title">{storie.title}</div>
          <div className="line__content__info">{storie.info}</div>
          <div className="line__content__info">{storie.amount_wanted}</div>
        </div>
        <div className="line__buttons">
          <button
            onClick={() => setModalData(storie)}
            type="button"
            className="btn btn-outline-success"
          >
            Edit
          </button>
          <button
            onClick={() => setDeleteData(storie)}
            type="button"
            className="btn btn-outline-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default LineS;
