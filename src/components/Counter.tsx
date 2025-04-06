import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, increment } = useCounter();

  return (
    <>
      <h3 className="text-2xl ">
        Contador: <small className="font-bold">{count}</small>
      </h3>
      <div>
        <button
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-600 hover:cursor-pointer"
          onClick={() => increment(1)}
        >
          +1
        </button>
        <button
          className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-600 hover:cursor-pointer"
          onClick={() => increment(-1)}
        >
          -1
        </button>
      </div>
    </>
  );
};

export default Counter;
