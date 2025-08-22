
//////////    1. Bank Balance System      /////////////

let currentBalance = 0;

class BankAccount {
  constructor(holderName, accountNo, balance) {
    this.holderName = holderName;
    this.accountNo = accountNo;
    this.balance = balance;
    currentBalance = balance;
  }

  withdraw(amount) {
    if (amount > currentBalance) {
      console.log(" Not Enough Money in your Account!");
    } else {
      currentBalance -= amount;
      console.log(` Successfully Withdrawn ${amount} Rs`);
    }
  }

  deposit(amount) {
    currentBalance += amount;
    console.log(` Successfully Deposited ${amount} Rs`);
  }

  checkBalance() {
    console.log(` Current Balance: ${currentBalance} Rs`);
  }
}

const account1 = new BankAccount("Ali Raza", "PK-123456", 1000);
console.log(account1);

account1.checkBalance();
account1.deposit(500);
account1.withdraw(300);
account1.checkBalance();


///////////     2. Todo List      ////////////

let taskList = [];

class TodoList {
  constructor(ownerName, ownerId) {
    this.ownerName = ownerName;
    this.ownerId = ownerId;
  }

  addTask(id, task) {
    let todo = { id: id, task: task };
    taskList.push(todo);
    console.log(" Task Added Successfully!");
  }

  removeTask(id) {
    taskList = taskList.filter((t) => t.id !== id);
    console.log(" Task Removed Successfully!");
  }

  showTasks() {
    console.log(" Current Task List:", taskList);
  }
}

const todoUser = new TodoList("Fatima", 201);
console.log(todoUser);

todoUser.addTask(1, "Buy groceries");
todoUser.addTask(2, "Complete JavaScript project");
todoUser.addTask(3, "Go for evening walk");
todoUser.showTasks();

todoUser.removeTask(2);
todoUser.showTasks();


/////////////     3. School Hierarchy         ////////////

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  schoolInfo() {
    console.log({
      schoolTiming: "8:30am to 1:45pm",
      schoolType: "Private",
      schoolFees: "3000 per month",
    });
  }
}

class Student extends Person {
  constructor(name, email, rollNo) {
    super(name, email);
    this.rollNo = rollNo;
  }

  schoolFestivals() {
    console.log({
      SportsDay: "15 March 2025",
      IndependenceDay: "14-Aug-2025",
      AnnualFunction: "20 December 2025",
    });
  }
}

class Teacher extends Person {
  constructor(name, email, subject) {
    super(name, email);
    this.subject = subject;
  }

  salaryManagement() {
    console.log({
      freshers: 12000,
      experienceOf1to3Years: "18000 to 25000",
      experienceOf4to6Years: "30000 to 45000",
      experienceOfAbove7Years: "50000+",
    });
  }
}

////    Objects 
const student1 = new Student("Ahmed Ali", "ahmed.ali@gmail.com", 101);
const teacher1 = new Teacher("Sara Khan", "sara.khan@gmail.com", "Mathematics");
const schoolAdmin = new Person("School Admin", "admin@school.com");

console.log(student1);
console.log(teacher1);
console.log(schoolAdmin);

schoolAdmin.schoolInfo();
student1.schoolFestivals();
teacher1.salaryManagement();
