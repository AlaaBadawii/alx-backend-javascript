export default function getStudentsByLocation(listStudents, city, newGrades) {
  return listStudents
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: (newGrades.find((grade) => grade.studentId === student.id) || { grade: 'N/A' }).grade,
    }));
}
