import { useContext, useState } from "react";
import HomeContext from "../../Contexts/HomeContext";

function LineH({ storie }) {
  const { setAmountData, setDonation } = useContext(HomeContext);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const add = () => {
    setDonation({
      name,
      amount_donating: Number(amount),
      storie_id: storie[1][0].id,
    });
    setAmountData({
      id: storie[1][0].id,
      amount_donating: Number(amount),
    });
    setAmount("");
  };

  return (
    <li className="list-group-item">
      <div className="home__content__info">
        <h2>{storie[0]}</h2>
        {storie[1][0].image ? (
          <div className="img-bin">
            <img src={storie[1][0].image} alt={storie[0]}></img>
          </div>
        ) : null}
        <div>We hope to raise {storie[1][0].amount_wanted} Eur</div>
        <div>
          So far collected:{" "}
          {storie[1][0].amount_collected ?? "no donations yet"} Eur
        </div>
        <div>Our story: {storie[1][0].info}</div>
      </div>
      <div className="donations">
        <h4>Already helped us:</h4>
        <ul className="list-group">
          {storie[1]?.map((d) =>
            d.did !== null ? (
              <li key={d.did} className="list-group-item">
                <div>{d.name} already donated:</div>
                <div>{d.amount_donating} Eur</div>
              </li>
            ) : null
          )}
        </ul>
        <div className="mb-3">
          <h4 className="form-label">Donate for this story:</h4>
          <label className="form-label">Your name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="form-label">
            Amount you are willing to donate:{" "}
          </label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button onClick={add} type="button" className="btn btn-outline-success">
          Donate
        </button>
      </div>
    </li>
  );
}

export default LineH;
