"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function createPerson(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = (formData.get("phone") as string) || null;
  const address = (formData.get("address") as string) || null;
  const city = (formData.get("city") as string) || null;
  const country = (formData.get("country") as string) || null;
  const bio = (formData.get("bio") as string) || null;
  const website = (formData.get("website") as string) || null;
  const company = (formData.get("company") as string) || null;

  await prisma.person.create({
    data: { firstName, lastName, email, phone, address, city, country, bio, website, company },
  });

  revalidatePath("/persons");
  redirect("/persons");
}

export async function updatePerson(id: string, formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = (formData.get("phone") as string) || null;
  const address = (formData.get("address") as string) || null;
  const city = (formData.get("city") as string) || null;
  const country = (formData.get("country") as string) || null;
  const bio = (formData.get("bio") as string) || null;
  const website = (formData.get("website") as string) || null;
  const company = (formData.get("company") as string) || null;

  await prisma.person.update({
    where: { id },
    data: { firstName, lastName, email, phone, address, city, country, bio, website, company },
  });

  revalidatePath("/persons");
  revalidatePath(`/persons/${id}`);
  redirect(`/persons/${id}`);
}

export async function deletePerson(id: string) {
  await prisma.person.delete({ where: { id } });
  revalidatePath("/persons");
  redirect("/persons");
}
