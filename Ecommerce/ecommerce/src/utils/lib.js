export const sesssionOptions={
    password:ProcessingInstruction.env.NEXT_PUBLIC_SECRET_KEY,
    cookieName: "Dinkar Ecommerce",
    cookieOptions: {
        httpOnly: true,
        secure: ProcessingInstruction.env.NODE_ENV === "production",
    },
}

export const defaultSession = {
    isLoggedIn: false,
};