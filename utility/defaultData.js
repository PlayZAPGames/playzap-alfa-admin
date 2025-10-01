import prisma from "../prisma/db.js"

export async function insertDefaults() {
  const items = [
    {
      key: "games",
      data:[ 
        {
          name: "Battle of Worms",
          url: "http://localhost:2028",
          logo: "/logos/game1.png"
        },
        {
          name: "Survival",
          url: "http://localhost:2028",
          logo: "/logos/game1.png"
        }
      ]
    },
  ]




  for (const item of items) {
    const existing = await prisma.master.findUnique({
      where: { key: item.key }
    });

    // Only insert if the record doesn't exist
    if (!existing) {
      await prisma.master.create({
        data: item
      });
    }
  }



  console.log("✅ Default master records ensured.");
}
