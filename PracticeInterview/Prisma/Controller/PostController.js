import prisma from "../DB/db.config.js";


export const fetchPosts = async (req, res) => {
    const posts = await prisma.post.findMany({})

    return res.json({ status: 200, data: posts })
}

export const createPost = async (req, res) => {
    const { user_id, title, description } = req.body;


    const newPost = await prisma.post.create({
        data: {
            user_id: Number(user_id),
            title,
            description
        }
    })

    return res.json({ status: 200, data: newPost, msg: "Post created" })
}


// export const updatePost = async (req, res) => {
//     const userId = req.params.id

//     const { name, email, password } = req.body;

//     await prisma.user.update({
//         where: {
//             id: Number(userId)
//         },
//         data: {
//             name,
//             email,
//             password
//         }
//     })

//     return res.json({ status: 200, msg: "User updated successfully" })
// }

// Delete user

// 

export const deletePost = async (req, res) => {
    const postId = req.params.id;
    await prisma.post.delete({
        where: {
            id: Number(postId)
        }
    })


    return res.json({ status: 200, mgs: "Post deleted successfully!" })
}