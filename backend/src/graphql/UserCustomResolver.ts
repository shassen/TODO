import { Resolver, Mutation, Arg, InputType, Field, Ctx, ObjectType, Query } from "type-graphql"
import { User } from "../generated/typegraphql-prisma"
import { GraphQLContext } from "../context/context"
import { AuthService } from "../services/authService"

@InputType("RegisterUserInput")
export class RegisterUserInput {
  @Field(() => String)
  email!: string

  @Field(() => String)
  password!: string

  @Field(() => String, { nullable: true })
  name?: string
}

@InputType("LoginUserInput")
export class LoginUserInput {
  @Field(() => String)
  email!: string

  @Field(() => String)
  password!: string
}

@ObjectType("LoginUserResponse")
export class LoginUserResponse {
  @Field(() => String)
  token!: string

  @Field(() => User)
  user!: User
}

@Resolver(User)
export class UserCustomResolver {
  @Mutation(() => User)
  async registerUser(
    @Arg("data") data: RegisterUserInput,
    @Ctx() ctx: GraphQLContext,
  ): Promise<User> {
    const { email, password, name } = data

    const user = ctx.userService.createUser({ email, password, name })
    return user
  }

  @Mutation(() => LoginUserResponse)
  async loginUser(
    @Arg("data", () => LoginUserInput) data: LoginUserInput,
    @Ctx() ctx: GraphQLContext,
  ): Promise<LoginUserResponse> {
    const { email, password } = data
    const user = await ctx.userService.authenticateUser({ email, password })
    const token = AuthService.signToken(user.id)

    return { token, user }
  }

  @Mutation(() => Boolean)
  async logoutUser(@Ctx() ctx: GraphQLContext): Promise<boolean> {
    return true
  }

  @Query(() => User, { nullable: true })
  async findUser(@Ctx() ctx: GraphQLContext): Promise<User | null> {
    const { user } = ctx
    if (!user) {
      return null
    }
    return ctx.userService.findUserById({ userId: user.userId })
  }
}
