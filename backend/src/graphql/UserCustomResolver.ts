import { Resolver, Mutation, Arg, InputType, Field, Ctx } from "type-graphql"
import { User } from "../generated/typegraphql-prisma"
import { UserService } from "../services/userService"

@InputType("RegisterUserInput")
export class RegisterUserInput {
  @Field(() => String)
  email!: string

  @Field(() => String)
  password!: string

  @Field(() => String, { nullable: true })
  name?: string
}

interface myContext {
  userService: UserService
}

@Resolver(User)
export class UserCustomResolver {
  @Mutation(() => User)
  async registerUser(@Arg("data") data: RegisterUserInput, @Ctx() ctx: myContext): Promise<User> {
    const { email, password, name } = data
    const user = ctx.userService.createUser({ email, password, name })
    return user
  }
}
