import { UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Mutation, Args, Resolver, Context } from '@nestjs/graphql';
import { LoginResponse } from './dto/login.response';
import { LoginUserInput } from './dto/login.input';
import { GqlAuthGuard } from './auth.guards';
import { User } from 'src/users/entities/user.entity';
@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  login(@Args('loginUserInput') loginUserInput: LoginUserInput, @Context() context) {
    ////login
    return this.authService.login(context.user);
  }



  @Mutation(()=> User)
  sinup(@Args('loginUserInput') loginUserInput: LoginUserInput){
    return this.authService.singup(loginUserInput);
  }
}
