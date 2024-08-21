export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const studentA: Student = {
    firstName: "Alaa",
    lastName: "Badawii",
    age: 22,
    location: "Sharqia, Egypt",
};
const studentB: Student = {
    firstName: "Ahmed",
    lastName: "Badawii",
    age: 22,
    location: "Sharqia, Egypt",
};

const studentsList: Array<Student> = [studentA, studentB];

const table = document.createElement('table');
