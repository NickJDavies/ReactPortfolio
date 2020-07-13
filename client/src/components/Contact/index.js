import React from "react";

function Nav() {
  return (
    <main class="container"> 
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6 card">

                <h2>Contact</h2>

                <div>
                    <aside class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" placeholder="Name"></input>
                    </aside>

                    <aside class="form-group">
                        <label>Email address</label>
                        <input type="email" class="form-control" placeholder="Email"></input>
                    </aside>

                    <aside class="form-group">
                        <label>Message</label>
                        <textarea rows="5" type="text" class="form-control" placeholder="Message"></textarea>
                    </aside>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>

                </div>
            </div>  
            <div class="col-sm-3"></div>
        </div>
    </main>
  );
}

export default Nav;
