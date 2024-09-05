"use client";

import { submitForm } from "@/app/action";
import React from "react";

export default function Page() {
  return (
    <div>
      All components
      <div>
        <form action={submitForm.bind(null, "tran tuan dat")}>
          firstName: <input type="text" name="firstName" />
          <br />
          lastName: <input type="text" name="lastName" />
          <br />
          age: <input type="text" name="age" />
          <br />
          <button>Submit form</button>
        </form>
      </div>
    </div>
  );
}
