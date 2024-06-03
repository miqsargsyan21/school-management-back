import PrismaSingleton from './client.js'
import bcrypt from "bcrypt";

async function main() {
    const alice = await PrismaSingleton.user.upsert({
        where: { email: 'alice@gmail.com' },
        update: {},
        create: {
            password: await bcrypt.hash("alice123", 7),
            email: 'alice@gmail.com',
            firstName: 'Alice',
            lastName: 'Stone',
        },
    })

    const admin = await PrismaSingleton.user.upsert({
        where: { email: 'admin@gmail.com' },
        update: {},
        create: {
            email: 'admin@gmail.com',
            password: await bcrypt.hash('admin123', 7),
            firstName: 'Admin',
            lastName: 'Admin',
            role: 'ADMIN',
        },
    })

    console.log({
        admin,
        alice
    })
}
main()
    .then(async () => {
        await PrismaSingleton.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await PrismaSingleton.$disconnect()
        process.exit(1)
    })