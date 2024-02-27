import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
export async function GET() {
  try {
    const allProducts = await prisma.product.findMany();
    return NextResponse.json(allProducts);
  } catch (error) {
    return NextResponse(error);
  }
}

export async function POST(request, response) {
  console.log("Response", response);

  const requestProduct = await request.json();

  try {
    const newProduct = await prisma.product.create({
      data: requestProduct,
    });
    return NextResponse.json({
      created: "Successfully",
      product: newProduct,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export function PUT(request, response) {
  return NextResponse.json({
    message: "working!",
  });
}

export function DELETE(request, response) {
  return NextResponse.json({
    message: "working!",
  });
}
