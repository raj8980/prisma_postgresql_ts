import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient()

async function main(){

    await prisma.user.create({
        data:{
            email:"rajpatel@gmail.com",
            name:"Raj Patel"
        }
    });
}

main().then(async () =>{
    await prisma.$disconnect()
}).catch(async (e)=>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})