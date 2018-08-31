<nav>
    <div class="row">
        <div class="col">
            <ul>
                <router-link tag="li" :to="{name:'home'}" exact><a>Home</a></router-link>
                <router-link tag="li" :to="{name:'futures'}" exact><a>Futures</a></router-link>
                <li><a class="logo">foodee</a></li>
                <router-link tag="li" :to="{name:'menu'}" exact><a>Menu</a></router-link>
                <router-link tag="li" :to="{name:'events'}" exact><a>Events</a></router-link>
                <router-link tag="li" :to="{name:'reserve'}" exact><a>Reservation</a></router-link>
                <router-link tag="li" :to="{name:'register'}" exact><a>Register</a></router-link>
                <router-link tag="li" :to="{name:'login'}" exact><a>Login</a></router-link>

            </ul>
        </div>
    </div>
</nav>
