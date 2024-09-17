
import React, { useEffect, useState } from "react";
import SelectField from "./SelectField";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {PropTypes } from "prop-types";

const Form= ({
  fields,
  formTitle,
  type,
  method,
  loading,
  submit,
}) => {
  const [initialFields, setInitialFields] = useState(null);
  const [imgFields, setImgFields] = useState(null);

  const router = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    submit(initialFields);
  };

  const updateField = (label, value) => {
    if (initialFields) {
      setInitialFields(
        initialFields.map((field) => {
          if (field.label === label) {
            return {
              ...field,
              value,
            };
          } else {
            return field;
          }
        })
      );
    }
  };

  const PATCH = method && method === "PATCH";

  useEffect(() => {
    if (imgFields) {
      const allImages = Object.keys(imgFields).map((k) => ({
        label: k,
        type: "images",
        value: imgFields[k],
      }));
      allImages.forEach((img) => {
        const existingField = initialFields?.find(
          (field) => field.label === img.label
        );
        if (!existingField) {
          setInitialFields((prev) => (prev ? [...prev, img] : [img]));
        } else {
          const newFields = initialFields?.map((f) => {
            if (f.label === img.label) {
              f.value = img.value;
              return f;
            }
            return f;
          });
          setInitialFields(newFields || []);
        }
      });
    }
  }, [imgFields]);

  useEffect(() => {
    if (fields) {
      setInitialFields(fields.filter((f) => f.type !== "images"));
      const imgF = fields
        .filter((f) => f.type === "images")
        .reduce((acc, field) => {
          return {
            ...acc,
            [field.label]: field.value,
          };
        }, {});
      setImgFields(imgF);
    }
  }, [fields]);

  const imageFields = imgFields ? Object.keys(imgFields) : [];

  return (
    <form
      onSubmit={submitForm}
      className="flex flex-col gap-3 flex-grow max-w-[768px]"
    >
      <h1>{formTitle}</h1>
      {imageFields.length > 0 && (
        <div className="flex flex-col w-full gap-3">
          {imageFields.map((field, i) => (
            <div className="flex gap-3 flex-wrap" key={i}>
              <h4 className="w-full font-semibold capitalize">
                {field.toLowerCase()}
              </h4>
              <CldUploadWidget
                onSuccess={(result: any, options) => {
                  setImgFields((prev: any) => ({
                    ...prev,
                    [field]: [...prev[field], result?.info.secure_url],
                  }));
                }}
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
              >
                {({ open }) => {
                  return (
                    <button
                      disabled={loading}
                      type="button"
                      onClick={() => open()}
                      className="w-[100px] h-[100px] bg-[#eee] hover:bg-[#999] flex flex-col items-center justify-center text-center text-5xl"
                    >
                      <BiPlus />
                      <span className="text-sm">Add image</span>
                    </button>
                  );
                }}
              </CldUploadWidget>
              {imgFields &&
                imgFields[field].map((url: string) => (
                  <Image
                    key={url}
                    src={url}
                    width={160}
                    height={100}
                    alt="Item image"
                  />
                ))}
            </div>
          ))}
        </div>
      )}
      {initialFields &&
        initialFields.map((field, i) => {
          if (field.type === "select") {
            return (
              <div key={i} className="flex items-center justify-between gap-3">
                <label htmlFor={field.label} className="capitalize">
                  {field.label.toLowerCase()}
                </label>
                <SelectField
                  className="w-[80%] p-3 outline-none rounded-lg border-[#ccc] border-[1px]"
                  value={field.value}
                  options={field.options}
                  label={field.label}
                  onChange={updateField}
                />
              </div>
            );
          } else if (field.type === "textarea") {
            return (
              <div key={i} className="flex items-start justify-between gap-3">
                <label htmlFor={field.label} className="capitalize">
                  {field.label.toLowerCase()}
                </label>
                <textarea
                  className="w-[80%] p-3 outline-none rounded-lg border-[#ccc] border-[1px]"
                  placeholder={field.label}
                  id={field.label}
                  value={field.value}
                  onChange={(e) => updateField(field.label, e.target.value)}
                ></textarea>
              </div>
            );
          } else if (field.type === "text") {
            return (
              <div key={i} className="flex items-center justify-between gap-3">
                <label htmlFor={field.label} className="capitalize">
                  {field.label.toLowerCase()}
                </label>
                <input
                  className="w-[80%] p-3 outline-none rounded-lg border-[#ccc] border-[1px]"
                  placeholder={`${field.label[0].toUpperCase()}${field.label
                    .substring(1)
                    .toLowerCase()}`}
                  id={field.label}
                  type="text"
                  value={field.value}
                  onChange={(e) => updateField(field.label, e.target.value)}
                />
              </div>
            );
          } else if (field.type === "number") {
            return (
              <div key={i} className="flex items-center justify-between gap-3">
                <label htmlFor={field.label} className="capitalize">
                  {field.label.toLowerCase()}
                </label>
                <input
                  className="w-[80%] p-3 outline-none rounded-lg border-[#ccc] border-[1px]"
                  placeholder={`${field.label[0].toUpperCase()}${field.label
                    .substring(1)
                    .toLowerCase()}`}
                  id={field.label}
                  type="number"
                  value={field.value}
                  onChange={(e) => updateField(field.label, e.target.value)}
                />
              </div>
            );
          }
        })}
      <div className="flex justify-end items-center gap-3">
        <button
          disabled={loading}
          className="transition-all hover:bg-green-700 bg-green-900 min-w-[160px] text-slate-100 p-2 rounded-md"
          type="submit"
        >
          {loading ? (PATCH ? "Editing" : "Adding") : PATCH ? "Edit" : "Add"}
        </button>
        <button
          disabled={loading}
          className="transition-all hover:bg-red-700 bg-red-900 min-w-[160px] text-slate-100 p-2 rounded-md"
          type="button"
          onClick={() => {
            router.back();
          }}
        >
          Back
        </button>
      </div>
    </form>
  );
};

export default Form;
