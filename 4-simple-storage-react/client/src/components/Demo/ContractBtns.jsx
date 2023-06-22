import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns({ setValue, setGreeter }) {
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");
  const [inputGreeter, setInputGreeter] = useState("");

  const handleInputChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const handleInputGreeterChange = e =>{
    setInputGreeter(e.target.value);
  };

  const read = async () => {
    const value = await contract.methods.read().call({ from: accounts[0] });
    setValue(value);
  };

  const readGreeter = async () => {
    const value = await contract.methods.greet().call({ from: accounts[0] });
    setGreeter(value);
  };

  const write = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newValue = parseInt(inputValue);
    await contract.methods.write(newValue).send({ from: accounts[0] });
  };

  const writeGreeter = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputGreeter === "") {
      alert("Please enter a value.");
      return;
    }
    const newValue = inputGreeter;
    await contract.methods.setGreet(newValue).send({ from: accounts[0] });
  };

  return (
    <div className="btns">

      <button onClick={read}>
        read()
      </button>

      <div onClick={write} className="input-btn">
        write(<input
          type="text"
          placeholder="uint"
          value={inputValue}
          onChange={handleInputChange}
        />)
      </div>

      <button onClick={readGreeter}>
        readGreeter()
      </button>

      <div onClick={writeGreeter} className="input-btn">
        write(<input
          type="text"
          placeholder="string"
          value={inputGreeter}
          onChange={handleInputGreeterChange}
        />)
      </div>

    </div>
  );
}

export default ContractBtns;
