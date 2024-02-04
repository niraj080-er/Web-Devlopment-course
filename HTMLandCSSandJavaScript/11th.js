class Employee{
    constructor(id,name,sal,designation){
        this.id=id;
        this.name=name;
        this.sal=sal;
        this.designation=designation;
    }
}
let emp1=new Employee(1,"Niraj kumar",10000000,"CEO");
let emp2=new Employee(2,"kumar",2000000,"Director")
console.log(emp1);
console.log(emp2);
//Single level inheritance

class Intern extends Employee{
    constructor(id,name,sal,designation,stipend,project){
        super(id,name,sal,designation);
        this.stipend=stipend;
        this.project=project;
    }
}
let a=new Intern(1,"Rahul",1500,"PA",69,"ghop ghop");
console.log(a);