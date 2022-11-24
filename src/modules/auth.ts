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
        
    }catch (E){

    }
}

export {createJWT, protect}