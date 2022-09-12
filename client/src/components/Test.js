import { connect } from "react-redux";
import { incAction, decAction, amountAction } from "../actions/";

const Test = ({ count, amount, incAction, decAction, amountAction }) => {
  return (
    <div className="flex flex-col justify-center items-center flex-auto">
      <span className="my-5">{count}</span>
      <input
        type="number"
        className="border-2 border-blue-500 mb-5"
        value={amount}
        onChange={(e) => amountAction(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => incAction(amount)}
        >
          Increase
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => decAction(amount)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { count: state.counter, amount: state.amount };
};

export default connect(mapStateToProps, { incAction, decAction, amountAction })(
  Test
);
