<template>
  <div class="main">
    <div>
      <img
        class="the-image"
        src="/undraw_security_re_a2rk.svg"
        alt=""
        srcset=""
      />
    </div>
    <div class="card">
      <h1 class="heading">Register</h1>
      <form class="main-form">
        <input
          v-model="emailLogin"
          type="email"
          class="form-control"
          placeholder="Email"
          required
        />
        <input
          v-model="usernameLogin"
          type="text"
          class="form-control"
          placeholder="Username"
          required
        />
        <input
          v-model="passwordLogin"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        />

        <md-button @click="doRegister" class="md-primary md-raised sign-button">
          SIGNUP
        </md-button>
        <md-button class="google-card" @click="signUpGoogle">
          <img
            class="google-button"
            src="/btn_google_signin_light_normal_web@2x.png"
            alt="Login with google"
          />
        </md-button>
      </form>
      <p class="lower-text">
        Already have an account?
        <md-button class="md-primary" @click="loginpage">
          Login here
        </md-button>
      </p>
    </div>
  </div>
</template>

<script>
import { AvatarGenerator } from "random-avatar-generator";
const generator = new AvatarGenerator();

export default {
  data() {
    return {
      usernameLogin: "",
      passwordLogin: "",
      emailLogin: "",
    };
  },
  methods: {
    loginpage() {
      this.$router.push("/login");
    },
    async doRegister() {
      if (this.passwordLogin.length >= 6) {
        try {
          await this.$fire.auth.createUserWithEmailAndPassword(
            this.emailLogin,
            this.passwordLogin
          );
          this.doLogin();
        } catch (e) {
          console.log(e);
        }
      }
    },
    async doLogin() {
      try {
        await this.$fire.auth
          .signInWithEmailAndPassword(this.emailLogin, this.passwordLogin)
          .then((res) => {
            this.checkUser(
              res.user.uid,
              this.usernameLogin,
              this.$store,
              this.$router
            );
          });
      } catch (e) {
        console.log(e);
      }
    },
    async signUpGoogle() {
      var provider = new this.$fireModule.auth.GoogleAuthProvider();
      this.$fireModule
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          this.checkUser(
            res.user.uid,
            res.user.displayName,
            this.$store,
            this.$router
          );
        })
        .catch((e) => {
          console.log(e);
        });
    },

    async checkUser(uid, username, store, router) {
      const ref = await this.$fire.firestore.collection("users");
      ref
        .where("uid", "==", uid)
        .get()
        .then(function (query) {
          if (query.size > 0) {
            const data = query.docs[0].data();
            store.dispatch("login", {
              username: data.username,
              uid: data.username,
              userimage: generator.generateRandomAvatar(data.username),
              amount: data.amount,
            });
            router.push("/");
          } else {
            console.log("No user!", username);
            ref.add({
              username: username,
              uid: uid,
              amount: 100,
            });
            store.dispatch("login", {
              username: username,
              uid: uid,
              userimage: generator.generateRandomAvatar(username),
              amunt: 100,
            });
            router.push("/");
          }
        })
        .catch(function (e) {
          console.log(e);
        });
    },
  },
  async mounted() {
    if (this.$store.state.loginStatus) {
      this.$router.push("/");
    }
  },
};
</script>

<style>
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-image: url("/blob-haikei.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
.the-image {
  width: 400px;
}
.heading {
  margin: 22px auto;
  font-family: "Roboto";
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-height: 420px;
  width: 400px;
  border-radius: 20px;
  padding: 20px;
  background-color: white;
  box-shadow: grey 2px 2px 5px;
}
.main-form {
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 350px;
  justify-content: space-between;
  align-items: center;
}
.sign-button {
  width: 300px;
}
.form-control {
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: #8b9dc3 2px solid;
  width: 300px;
}
textarea:focus,
input:focus {
  outline: none;
}
.google-card {
  height: 50px;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 0;
}
.google-button {
  height: 50px !important;
  align-items: center;
}
.lower-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
}
</style>
