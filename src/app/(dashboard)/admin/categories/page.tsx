"use client";

import { useEffect, useState } from "react";
import CreateCategory from "./CreateCategory";

type Category = {
  id: number;
  name: string;
  description: string;
};

type Props = {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  editingCategory: Category | null;
  setEditingCategory: React.Dispatch<React.SetStateAction<Category | null>>;
};

export default function page() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  const handleDelete = async (categoryId: number) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/categories/${categoryId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to delete category");
      }

      // Remove the deleted category from the state
      setCategories((prev) => prev.filter((cat) => cat.id !== categoryId));
    } catch (error) {
      console.error("Error deleting category:", error);
      alert("Failed to delete category");
    }
  };

  return (
    <div className="space-y-8 p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-sm border border-gray-200 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
            Admin Dashboard
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Categories Management
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Manage all book categories, organize content, and create new
            sections for your platform.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-gray-50 p-5 border border-gray-200">
            <p className="text-sm text-gray-500">Total Categories</p>
            <h3 className="mt-2 text-3xl font-bold text-gray-900">
              {categories.length}
            </h3>
          </div>

          <div className="rounded-2xl bg-gray-50 p-5 border border-gray-200">
            <p className="text-sm text-gray-500">Books Tagged</p>
            <h3 className="mt-2 text-3xl font-bold text-gray-900">1.2K</h3>
          </div>

          <div className="rounded-2xl bg-gray-50 p-5 border border-gray-200 col-span-2 sm:col-span-1">
            <p className="text-sm text-gray-500">Active Today</p>
            <h3 className="mt-2 text-3xl font-bold text-gray-900">24</h3>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1fr_380px]">
        <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Current Categories
              </h2>

              <p className="mt-1 text-gray-600">
                Browse and manage all existing categories.
              </p>
            </div>

            <input
              type="text"
              placeholder="Search categories..."
              className="h-11 rounded-xl border border-gray-300 px-4 outline-none focus:border-black"
            />
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Category
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Description
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {categories.map((category) => (
                  <tr
                    key={category.id}
                    className="border-t border-gray-200 bg-white"
                  >
                    <td className="px-6 py-5">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {category.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          ID: CAT-{category.id}
                        </p>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-sm leading-6 text-gray-600 max-w-sm">
                      {category.description}
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setEditingCategory(category)}
                          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(category.id)}
                          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <CreateCategory
          categories={categories}
          setCategories={setCategories}
          editingCategory={editingCategory}
          setEditingCategory={setEditingCategory}
        />
      </div>
    </div>
  );
}
