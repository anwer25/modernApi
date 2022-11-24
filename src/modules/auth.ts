import jwt from 'jsonwebtoken'


const createJWT = ({id, username}) => {
    // @ts-ignore
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET)
    return token
}

const protect = (req, res, next) => {
    const bearer:string = req.headers.authorization

    if(!bearer){
        res.status(401)
        res.json({message: "not authorized"})
        return 
    }

    const [, token] = bearer.split(' ')

    if(!token){
        res.status(401)
        res.json({ message: "not authorized" })
        return 
    }

    try {
        // @ts-ignore
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        next()
    }catch (E){
        res.status(401)
        res.json({ message: "not authorized" })
        return 
    }
}

export {createJWT, protect}