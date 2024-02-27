

const Header = ({text}) => {
   return(
     <h1>{text}</h1>
   )
 }

 const Part = ({part, exercises}) => {
   return (
     <div>
       <p>{part}: {exercises}</p>
     </div>
   )
 }

 const Content = ({ parts }) => 
  parts.map((part) => <Part key={part.id} part={part.name} exercises={part.exercises} />);


 const Total = ({course}) => {
   let totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0);
   return (
     <div>
       <p><strong>Number of exercises: {totalExercises}</strong></p>
     </div>
   )
 };

 const Course = ({ course }) => {
   return (
     <div>
       <Header text={course.name} />
       <Content parts={course.parts} />
       <Total course={course} />
     </div>
   );
 };

 export default Course;