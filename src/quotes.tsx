import React, { useState, useEffect } from "react";
import {DataTable} from "../src/components/data-table";
import { columns } from "../src/components/columns";

interface Quote {
    _id: string;
  content: string;
  author: string;
  dateAdded: string;
}

const Quotes = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await fetch("https://api.quotable.io/quotes?limit=60");
      if (!response.ok) {
        throw new Error("Failed to fetch quotes");
      }
      const data = await response.json();
      setQuotes(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };

  return (
    <div className="text-center mt-5 ">
      <h1>Quotes</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataTable data={quotes} columns={columns} />
      )}
    </div>
  );
};

export default Quotes;
