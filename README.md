# Hostel-Buddy
hostel management website

# signup style css
```
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

*
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body
{
    font-family: 'Lato', sans-serif;
}

.outer-box
{
    padding-top: 1.5rem;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to top left,#6e83a1, #587193);
}
.inner-box
{
    width: 400px;
    margin: 0 auto;
    position: relative;
    top: 40%;
    transform: translateY(-50%);
    padding: 20px 40px;
    /* background-color: white; */
    background: linear-gradient(to top left,#ffffffff,#ffffff09);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    box-shadow: 2px 2px 5px #0670b7;
    z-index: 2;
}
.signup-header h1
{
    font-size: 2.5rem;
    color: #212121;
}
.signup-header p
{
    font-size: 0.9rem;
    color: #555;
}

.signup-body
{
   margin: 20px 0;
}

.signup-body p
{
    margin: 10px 0;
}

.signup-body p label
{
    display: block;
    font-weight: bold;
}

.signup-body p input
{
    width: 100%;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 4px;
    margin-top: 4px;
    font-size: 1rem;
}

.signup-body p input[type="submit"]
{
    background-color: #3498db;
    border: none;
    color: white;
    cursor:pointer;
}

.signup-body p input[type="submit"]:hover
{
    background-color: #0670b7;
}

.signup-footer p
{
    color: #555;
    text-align:center;
}

.signup-footer p a
{
   color: #0670b7; 
}

.circle
{
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background: linear-gradient(to top right, #ffffff33, #ffffffff);
    position: absolute;
}

.c1
{
    top: 100px;
    left: 40px;
}

.c2
{
    bottom: 200px;
    right: 50px;
}
```