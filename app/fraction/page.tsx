"use client";

import React, { useState } from "react";

const Fractionalize: React.FC = () => {
  const [nftId, setNftId] = useState("");
  const [royaltyPercentage, setRoyaltyPercentage] = useState("");
  const [supply, setSupply] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [tokenTicker, setTokenTicker] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ nftId, royaltyPercentage, supply, tokenName, tokenTicker });
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
          maxWidth: "400px",
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
          Step 2: Fractionalise your SNFT
        </h2>
        <label style={{ color: "white", marginBottom: "10px" }}>
          NFT ID
          <input
            type="text"
            value={nftId}
            onChange={(e) => setNftId(e.target.value)}
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
        <label style={{ color: "white", marginBottom: "10px" }}>
          Royalty Percentage
          <input
            type="number"
            value={royaltyPercentage}
            onChange={(e) => setRoyaltyPercentage(e.target.value)}
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
        <label style={{ color: "white", marginBottom: "10px" }}>
          Supply
          <input
            type="number"
            value={supply}
            onChange={(e) => setSupply(e.target.value)}
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
        <label style={{ color: "white", marginBottom: "10px" }}>
          Token Name
          <input
            type="text"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
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
        <label style={{ color: "white", marginBottom: "10px" }}>
          Token Ticker
          <input
            type="text"
            value={tokenTicker}
            onChange={(e) => setTokenTicker(e.target.value)}
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

export default Fractionalize;
