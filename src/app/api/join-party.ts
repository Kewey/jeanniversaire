import { Client } from "@notionhq/client";

export const notion = new Client({
    auth: process.env.NOTION_ACCESS_TOKEN,
});



export async function POST(request: Request) {
    const { name } = await request.json()
    
    await notion.pages.create({
        parent: {
            database_id: process.env.NOTION_DATABASE_ID,
        },
        properties: {
            Name: {
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
                    name: "Viens",
                    color: "green",
                },
            },
        },
    })
}


// import { Client } from '@notionhq/client'

// export default async function handler(req: any, res: any) {
//   if (req.method !== 'POST') {
//     return res
//       .status(405)
//       .json({ message: `${req.method} requests are not allowed` })
//   }

//   const notion = new Client({
//     auth: process.env.NOTION_ACCESS_TOKEN,
//   })

//   try {
//     const { name, isComming, carTeam } = JSON.parse(req.body)

//     await notion.pages.create({
//       parent: {
//         database_id: process.env.NOTION_DATABASE_ID,
//       },
//       properties: {
//         Nom: {
//           title: [{ type: 'text', text: { content: name } }],
//         },
//         'Fait honneur de sa présence': {
//           type: 'checkbox',
//           checkbox: Boolean(isComming),
//         },
//         'Motorisé par': {
//           select: { name: carTeam || 'From PX city' },
//         },
//       },
//     })
//     res.status(201).json({ msg: 'Success' })
//   } catch (error) {
//     res.status(500).json({ msg: error })
//   }
// }