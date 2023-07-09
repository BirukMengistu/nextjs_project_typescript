export const UsersType = class{
 constructor(name, gender, age){
    this.name =name;
    this.gender=gender;
    this.age=age

 }
 getDetailsInfo(){
    return `Name - ${this.name} ,  Gender - ${this.gender} ,  Age - ${this.age} `
}
}

export let Reviewer =  class extends UsersType{
constructor(name, gender, age , userType){
    super(name, gender, age)
    this.userType =userType
}
reviewrInfo(){
   return `User type  ${this.userType} `
}
}

let Senay = new Reviewer('senay','male' ,35 , 'Code Reviewer and Tester')

console.log(Senay.getDetailsInfo)