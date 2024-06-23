"use client";

import { backInOut } from "framer-motion";
import React, { useState } from "react";

const Withdraw: React.FC = () => {
  const [contractAddress, setContractAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ contractAddress });
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
        margin: "60px",
        backfaceVisibility: "hidden",
        // backInOut:
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
          Withdraw Fractions
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

export default Withdraw;
