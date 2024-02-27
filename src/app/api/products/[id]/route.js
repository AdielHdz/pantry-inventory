import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
export async function GET(req, { params }) {
  const { id } = params;

  const user = await fetch(`https://reqres.in/api/users/${id}`).then(
    (response) => response.json()
  );

  return NextResponse.json(user);
}

export async function DELETE(request, { params }) {
  const { id } = params;

  console.log(id);
  try {
    const productDeleted = await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });

    console.log(productDeleted);

    return NextResponse.json(productDeleted);
  } catch (error) {
    return NextResponse.json(error);
  }
}
