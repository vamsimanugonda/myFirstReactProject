import React from 'react'

const Header = () => {
  return (
    <div>
     <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">Shopping Mall</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  ms-auto mb-2 mb-lg-0">
        <li class="nav-item mx-2">
          <a class="nav-link text-white" aria-current="page" href="#">Woman</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link text-white" href="#">Men</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link text-white" href="#">Beauty</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link text-white" href='#'>Children</a>
        </li>
        <form class="d-flex mx-2" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
        <li class="nav-item mx-2">
          <a class="nav-link text-white" href="#">Signin/Signup</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link text-white" href="#">Cart</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
