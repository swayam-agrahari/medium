import {PrismaClient} from "@prisma/client/edge";
import {withAccelerate} from "@prisma/extension-accelerate";
import {Hono} from "hono";
import {sign} from "hono/jwt";
import {signupInput,signinInput} from "@swayam1/medium-commons"


export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>()
userRouter.post('/signup', (async c => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
    const {success} = signupInput.safeParse(body);
    if(!success){
        c.status(400)
        return c.json({
            message: "Wrong inputs",
        })
    }
    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
            }
        })

        const token = await sign({id: user.id}, c.env.JWT_SECRET)
        return c.json({
            token: token
        })
    } catch (e) {

        return c.json({
            msg: 'User exists',
        })
    }

}))


userRouter.post('/signin', (async c => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const {success} = signinInput.safeParse(body);
    if(!success){
        c.status(400)
        return c.json({
            message: "Wrong inputs",
        })
    }
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password
            }
        })

        if (!user) {
            c.status(403)
            return c.json({
                msg: "No such user",
            })
        }
        const jwt = await sign({id: user.id}, c.env.JWT_SECRET);
        return c.json({jwt});
    } catch (e) {
        return c.json({
            msg: 'Authentication failed',
        })
    }

}))