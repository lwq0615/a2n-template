import { Control, Get, Query, Autowired, Service, PostConstruct, Scope, BeanScope, Post } from 'a2n';


@Control
export default class UserControl{

  @Get("/get")
  get(a: any, @Query query: any){
    // console.log(query);
    return "query2"
  }

  @Post("/get")
  get1(@Query query: any){
    // console.log(query);
    console.log("first")
    return "query"
  }

}