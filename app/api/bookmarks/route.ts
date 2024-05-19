import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// creating a bookmark
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, description, url } = body;
        const collection = await prisma.bookmarks.create({
            data: {
                title,
                description,
                url
            },
        });
        return NextResponse.json(collection, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}

// getting all bookmarks
export async function GET() {
    try {
        const res = await prisma.bookmarks.findMany();
        return NextResponse.json(res, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "Error Occurred while fetching bookmarks" },
            { status: 500 }
        );
    }
}
