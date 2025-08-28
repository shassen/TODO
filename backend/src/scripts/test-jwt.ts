import { AuthService } from "../services/authService"

const fakeUser = "user1234"

const token = AuthService.signToken(fakeUser)
console.log("Generated token 🎟️: ", token)

const payload = AuthService.verifyToken(token)
console.log("Decoded payload 🎒: ", payload)
