"use client";

import { useEffect, useState } from "react";

function CreateCategory({
  editingCategory,
  setEditingCategory,
  setCategories,
}: {
  editingCategory: Category | null;
  setEditingCategory: React.Dispatch<React.SetStateAction<Category | null>>;
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // fill form when editing
  useEffect(() => {
    if (editingCategory) {
      setName(editingCategory.name);
      setDescription(editingCategory.description);
    }
  }, [editingCategory]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isEdit = !!editingCategory;

    try {
      const response = await fetch(
        isEdit
          ? `${process.env.NEXT_PUBLIC_API_URL}/admin/categories/${editingCategory.id}`
          : `${process.env.NEXT_PUBLIC_API_URL}/admin/categories`,
        {
          method: isEdit ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            name,
            description,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      // =========================
      // OPTIMISTIC UI UPDATE
      // =========================

      if (isEdit) {
        setCategories((prev) =>
          prev.map((cat) =>
            cat.id === editingCategory.id
              ? {
                  ...cat,
                  name,
                  description,
                }
              : cat,
          ),
        );
      } else {
        setCategories((prev) => [data.category, ...prev]);
      }

      // reset form
      setName("");
      setDescription("");
      setEditingCategory(null);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200 h-fit sticky top-6">
      <h2 className="text-2xl font-semibold text-gray-900">
        {editingCategory ? "Edit Category" : "Create Category"}
      </h2>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Category Name"
          className="w-full rounded-xl border p-3"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full rounded-xl border p-3"
        />

        <button className="w-full bg-black text-white p-3 rounded-xl">
          {editingCategory ? "Update Category" : "Create Category"}
        </button>

        {editingCategory && (
          <button
            type="button"
            onClick={() => setEditingCategory(null)}
            className="w-full mt-2 border p-3 rounded-xl"
          >
            Cancel Edit
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateCategory;
