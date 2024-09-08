import { Link } from "react-router-dom";
import "./Login.css"
const Login=()=>{
    return <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello world</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, laboriosam et laborum ipsa iure ad atque alias reiciendis! Ab corporis, architecto commodi atque quisquam voluptas quis doloribus sunt sapiente molestias?</p>
                <span>Don't you have an account</span>
                <Link to="/register">
                <button>Register</button>
                </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="username"></input>
                        <input type="password" placeholder="password"></input>
                        <button>Login</button>
                    </form>

                
            </div>
        </div>
    </div>
}
export default Login;