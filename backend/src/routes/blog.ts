import {Hono} from "hono";
import {verify} from "hono/jwt";
import {PrismaClient} from "@prisma/client/edge";
import {withAccelerate} from "@prisma/extension-accelerate";
import {createBlogInput,updateBlogInput} from "@swayam1/medium-commons"

export const blogRouter = new Hono<{
    Bindings: {
        JWT_SECRET: string,
        DATABASE_URL: string,
    },
    Variables: {
        authorId: string,
    }
}>();


blogRouter.use('/*', async (c, next) => {
    const header = c.req.header('Authorization') || "";
    if (!header) {
        c.status(401);
        return c.json({error: "unauthorized"});
    }
    const token = header.split(' ')[1];
    try {
        const user = await verify(token, c.env.JWT_SECRET)
        c.set("authorId", String(user.id));
        await next()
    } catch (e) {
        c.status(403)
        return c.json({
            msg: 'Authentication failed',
        })
    }

})


blogRouter.post('/', (async c => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const {success} = createBlogInput.safeParse(body);
    if(!success){
        c.status(400)
        return c.json({
            message: "Wrong inputs",
        })
    }

    try {
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: c.get("authorId")


            }
        })
        return c.json({
            id: blog.id,
        })
    } catch (e) {
        return c.json({
            msg: 'Blog not created',
        })
    }


}))

blogRouter.put('/', (async c => {
    const body = await c.req.json();
    console.log(body)
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const {success} = updateBlogInput.safeParse(body);
    if(!success){
        c.status(400)
        return c.json({
            message: "Wrong inputs",
        })
    }

    try {
        const blog = await prisma.post.update({
            where: {
                id: body.id,
            },
            data: {
                title: body.title,
                content: body.content,
            }
        })
        return c.json({
            id: blog
        })
    } catch (e) {
        return c.json({
            msg: 'Blog not updates',
        })
    }
}))
blogRouter.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blogs = await prisma.post.findMany({
            select:{
                id: true,
                title:true,
                content:true,
                author:{
                    select:{
                        name:true
                    }
                }

            }
        })
        return c.json({
            blogs
        })
    } catch (e) {
        c.status(411)
        return c.json({
            msg: 'Blog not found',
        })
    }
})

blogRouter.get('/:id', (async c => {
    const id = c.req.param('id');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.post.findFirst({
            where: {
                id: id,
            },
            select:{
                id: true,
                title:true,
                content:true,
                author:{
                    select:{
                        name:true
                    }
                }

            }
        })
        return c.json({
            blog: blog,
        })
    } catch (e) {
        c.status(411)
        return c.json({
            msg: 'Blog not found',
        })
    }

}))
