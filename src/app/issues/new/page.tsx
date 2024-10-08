"use client";


import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title">
        <TextField.Slot> </TextField.Slot>
      </TextField.Root>
      <SimpleMDE placeholder="Description" />
      <Button> Submit new issue </Button>
    </div>
  );
};

export default NewIssuePage;
