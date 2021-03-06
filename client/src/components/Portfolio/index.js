import React from "react";

function About() {
  return (
      <main class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <section class="col-md-8 card">
                <div class="row">
                <h2 id="Portfolio">Portfolio</h2>
                </div>
                <div class="row">

                    <figure class="figure portfolioImg">
                        <a href="https://georgiellis.github.io/Recipe-Helper/Fridge_Content/Fridge_Content.html" target="_blank">
                            <img src="Images/Recipe-Helper.png" class="img-thumbnail figure-img img-responsive image" alt=""></img>
                            <p class="figure-caption caption text-center">Recipe Helper (Project #1)</p>
                        </a>
                    </figure>

                    <figure class="figure portfolioImg">
                        <a href="https://nickjdavies.github.io/WorkDayPlanner/develop/index" target="_blank">
                            <img src="Images/WorkDayPlanner.png" class="img-thumbnail figure-img img-responsive image" alt=""></img>
                            <p class="figure-caption caption text-center">WorkDay Planner</p>
                        </a>
                    </figure>

                    <hr></hr>

                    <figure class="figure portfolioImg">
                        <a href="https://nickjdavies.github.io/PasswordGenerator/" target="_blank">
                            <img src="Images/Password-Generator.png" class="img-thumbnail figure-img img-responsive image" alt=""></img>
                            <p class="figure-caption caption text-center">Password Generator</p>
                        </a>
                    </figure>

                    <figure class="figure portfolioImg">
                        <a href="https://projects-2.herokuapp.com/" target="_blank">
                            <img src="Images/red-chilli-vector.png" class="img-thumbnail figure-img img-responsive image" alt=""></img>
                            <p class="figure-caption caption text-center">Recipedia (Project #2)</p>
                        </a>
                    </figure>

                    <hr></hr>

                    <figure class="figure portfolioImg">
                        <a href="https://workouttrackerhw.herokuapp.com/" target="_blank">
                            <img src="Images/WorkoutTracker.png" class="img-thumbnail figure-img img-responsive image" alt=""></img>
                            <p class="figure-caption caption text-center">Workout Tracker</p>
                        </a>
                    </figure>

                    <figure class="figure portfolioImg">
                        <a href="#">
                            <img src="Images/QuestionMark.png" class="img-thumbnail figure-img img-responsive image" alt=""></img>
                            <p class="figure-caption caption text-center">Upcoming (Project #3)</p>
                        </a>
                    </figure>
                </div>
            </section>
            <div class="col-md-2"></div>
        </div>
    </main>
  );
}

export default About;
