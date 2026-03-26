import React from 'react'

const Navbar = () => {
    return (
        <section class="row">
            <div class="col-md-12">
                {/* <!-- a nav with navbar content  --> */}
                <nav class="navbar navbar-expand-md bg-dark">
                    {/* <img src="images/logo.jpg" alt="" style={{ height: 50, width: 40 ,objectFit:"fill" }} /> */}
                    <a href="home" class=" navbar-brand text-danger">Iphones</a>
                    <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- a division containg the links --> */}
                    <div class="collapse navbar-collapse" id="navbarcollapse">
                        <div class="navbar-nav">
                            <a href="/home" class="nav-link text-light">Home</a>
                            <a href="/addproducts" class="nav-link text-light">Add products</a>
                            <a href="/signin" class="nav-link text-light">sign in</a>
                            <a href="/signup" class="nav-link text-light ">sign up</a>

                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Navbar