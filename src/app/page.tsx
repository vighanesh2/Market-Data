'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [htmlData, setHtmlData] = useState(null);

  const getData = async () => {
    try {
      // Call the API route to get the data
      const res = await fetch('/api/getData');
      const data = await res.json();
      
      // Log or process the response data
      console.log('Fetched HTML Data:', data);
      setHtmlData(data.html);  // Store the HTML in state to display it or process further
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Button onClick={getData}>Submit</Button>
      
      {/* Optionally render the fetched HTML or data */}
      {htmlData && (
        <div>
          <h2>Fetched Data:</h2>
          <pre>{htmlData}</pre> {/* You can render the HTML or do further processing */}
        </div>
      )}
    </main>
  );
}
