import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//We now need to create five components: one for the Navbar and four for the routes.
//We’ll actually create them in separate files.
import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
 return (
   <Router>
    <div className="container">
     <Navbar />
     <br/>
     <Route path="/" exact component={ExercisesList} />
     <Route path="/edit/:id" component={EditExercise} />
     <Route path="/create" component={CreateExercise} />
     <Route path="/user" component={CreateUser} />
     {
       //There is a <Route> element for each route of the application. The path attribute sets the url path.
      // The component is the code that will be loaded when a user goes to that path
   }
    </div>
   </Router>
 );
}

export default App;
