import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const users = await prisma.user.findMany(
        {
            where:{
                email: {
                    endsWith: 'ymail.com'
                },
                posts: {
                    some:{
                        published: true
                    }
                }
            },
            include:{
                posts:{
                    where:{
                        published:true
                    }
                }
            }
        }
    );
    console.log(users);

    const user = await prisma.user.findUnique({
        where:{
            id: 1
        },
        include:{
            posts:true
        }
    })
    console.log(user);
};

main().then(async ()=>{
    await prisma.$disconnect()
})
.catch(async (e) =>{
    console.error(e);
    await prisma.$disconnect()
    process.exit(1)
})