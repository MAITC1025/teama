<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}
.navbar {
  overflow: hidden;
  background-color: #333; 
}
.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.subnav {
  float: left;
  overflow: hidden;
}
.subnav .subnavbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}
.navbar a:hover, .subnav:hover .subnavbtn {
  background-color: red;
}
.subnav-content {
  display: none;
  position: absolute;
  left: 0;
  background-color: red;
  width: 100%;
  z-index: 1;
}
.subnav-content a {
  float: left;
  color: white;
  text-decoration: none;
}
.subnav-content a:hover {
  background-color: #eee;
  color: black;
}
.subnav:hover .subnav-content {
  display: block;
}
</style>

<div class="navbar">
  <a href="#home">Home</a>
  <div class="subnav">
    <button class="subnavbtn">About<i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#Morgan">Morgan</a>
      <a href="#James">James</a>
      <a href="#Dave Austin">Dave Austin</a>
    </div>
  </div> 
  <div class="subnav">
    <button class="subnavbtn">Learned<i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#bring">HTML</a>
      <a href="#deliver">CSS</a>
      <a href="#package">JavaScript</a>
    </div>
  </div> 
</div>

<div style="padding:0 16px">
  <h3>Input info here</h3>
  <p>And over here</p>
</div>
