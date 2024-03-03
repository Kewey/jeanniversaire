"use server";

import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_ACCESS_TOKEN,
});

export async function addToParty(name, status) {    
    const res = await notion.pages.create({
        parent: {
            database_id: process.env.NOTION_DATABASE_ID,
        },
        properties: {
            Nom: {
                title: [
                    {
                        text: {
                            content: name,
                        },
                    },
                ],
            },
            Status: {
                select: {
                    name: status ? "Viens" : "Pas la",
                    color: status ? "green" : "red",
                },
            },
        },
    })    
}