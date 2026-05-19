"use client";

import { useEffect, useState } from "react";

function page() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        );
        const data = await res.json();
        setCategories(data.categories);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCategories();
  }, []);

  console.log(categories);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="mb-4 p-4 border rounded">
            <h2>{category.name}</h2>
            <p>{category.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
