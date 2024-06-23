"use client";

import React, { useState } from "react";

const Distribute: React.FC = () => {
  const [contractAddress, setContractAddress] = useState("");
  const [recipients, setRecipients] = useState<string[]>([""]);
  const [percentages, setPercentages] = useState<number[]>([0]);

  const handleRecipientChange = (index: number, value: string) => {
    const newRecipients = [...recipients];
    newRecipients[index] = value;
    setRecipients(newRecipients);
  };

  const handlePercentageChange = (index: number, value: number) => {
    const newPercentages = [...percentages];
    newPercentages[index] = value;
    setPercentages(newPercentages);
  };

  const handleAddRecipient = () => {
    setRecipients([...recipients, ""]);
    setPercentages([...percentages, 0]);
  };

  const handleRemoveRecipient = (index: number) => {
    const newRecipients = recipients.filter((_, i) => i !== index);
    const newPercentages = percentages.filter((_, i) => i !== index);
    setRecipients(newRecipients);
    setPercentages(newPercentages);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ contractAddress, recipients, percentages });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#111",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#222",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <h2
          style={{
            color: "white",
            marginBottom: "20px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          Distribute Fractions
        </h2>
        <label style={{ color: "white", marginBottom: "10px" }}>
          Fraction Contract Address
          <input
            type="text"
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
            style={{
              marginTop: "5px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #555",
              backgroundColor: "#333",
              color: "white",
              width: "100%",
              boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
            }}
          />
        </label>
        {recipients.map((recipient, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <input
              type="text"
              placeholder={`Recipient ${index + 1}`}
              value={recipient}
              onChange={(e) => handleRecipientChange(index, e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #555",
                backgroundColor: "#333",
                color: "white",
                flex: 1,
                marginRight: "10px",
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
              }}
            />
            <input
              type="number"
              placeholder={`Percentage ${index + 1}`}
              value={percentages[index]}
              onChange={(e) =>
                handlePercentageChange(index, Number(e.target.value))
              }
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #555",
                backgroundColor: "#333",
                color: "white",
                flex: 1,
                marginRight: "10px",
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
              }}
            />
            <button
              type="button"
              onClick={() => handleRemoveRecipient(index)}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "white",
                color: "black",
                cursor: "pointer",
              }}
            >
              -
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddRecipient}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          Add Recipient
        </button>
        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Distribute;
