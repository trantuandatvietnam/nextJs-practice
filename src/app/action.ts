"use server";

export async function submitForm(myName: string, formData: FormData) {
  const rawFormData = Object.fromEntries(formData);
  console.log("rawFormData", rawFormData);
  console.log("myName", myName);
}
