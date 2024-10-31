"use client";
import React from "react";

const ResumeTopBarButton = (props: {
  selected: boolean;
  title: string;
  onclick: () => any;
}) => {
  return (
    <button
      className={
        "font-bold text-sm px-6 py-6 " +
        (props.selected ? "text-sky-600" : "text-gray-800") +
        " hover:text-sky-600"
      }
      onClick={props.onclick}
    >
      {props.title}
    </button>
  );
};

export default ResumeTopBarButton;
