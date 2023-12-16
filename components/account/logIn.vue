<template>

    <div class="my-[73px] flex items-center justify-around ">
      <div class=" hidden md:block  ">
        <img class="h-[320px]" src="~/assets/img/account.svg"  alt="لوگو "/>
      </div>
      <div class=" animate__animated animate__bounceInRight animate__delay 0.3s  ">
      <div class="flex   min-h-full  flex-col justify-center  px-6 py-12 " dir="rtl">
        <div class="my-auto   sm:w-[400px] sm:max-w-sm">
          <img class="mx-auto  h-20 w-auto" src="https://g2internship.com/_nuxt/img/28.74cd8e9.svg" alt="لوگو "/>
          <h2 class="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">ورود به حساب کاربری
            خود</h2>
        </div>

        <div class="mt-10 sm:w-[400px] sm:max-w-sm">
          <form class="space-y-6" @submit.prevent="loginUser">
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">آدرس ایمیل</label>
              <div class="mt-2">
                <input v-model="user.email" id="email" name="email" type="email" autocomplete="email" required="true"
                       class="block w-full pr-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">رمز عبور</label>
                <div class="text-sm">
                  <a href="#" class="font-semibold text-primary hover:text-Secondary">رمز عبور خود را فراموش
                    کرده‌اید؟</a>
                </div>
              </div>
              <div class="mt-2">
                <input v-model="user.password" id="password" name="password" type="password" autocomplete="current-password" required="true"
                       class="block pr-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <button type="submit"
                      class="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm leading-6 font-semibold  text-white shadow-sm hover:bg-Secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                ورود
              </button>
            </div>
          </form>

          <p  class="mt-10 text-center text-sm text-gray-500">
            عضو نیستید؟
            {{ ' ' }}
            <nuxt-link  to="signup" class=" font-semibold leading-6 text-primary hover:text-Secondary">ثبت نام </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component
export default class Login extends Vue {
  user = {
    email: "",
    password: "",
  };
  loginSuccess: boolean | null = null;

 async loginUser(): Promise<void> {
  const loginData = {
    email: this.user.email,
    pass: this.user.password,
  };



  console.log(loginData)

// try{
//   const res = await axios.get('http://localhost:3002/users', {params: loginData})
//   console.log(res, 'res')
// }catch(err){
//   console.log(err, 'err')
// }

// try {
//   const res = await axios.post('http://localhost:3002/users', loginData);
//   console.log(res.data, 'res');
// } catch (err) {
//   console.error('Error:', err);
// }


  axios
    .get("http://localhost:3002/users", { params: loginData })
    .then((response) => {
      console.log(response)
      console.log('len',response.data.length>0)
      if (response.data.length>0) {
        this.loginSuccess = true;
        const loggedInUser = response.data[0];
        const userName = `${loggedInUser.fname} ${loggedInUser.lname}`;
        localStorage.setItem('isLogin', 'true');
        localStorage.setItem('userName', userName);
          Swal.fire({
              position: "center",
              icon: "success",
              title: "ورود موفقیت‌آمیز بود",
              showConfirmButton: false,
              timer: 1500
          });
         this.$router.replace("/");
      } else {
        this.loginSuccess = false;
          Swal.fire({
              position: "center",
              icon: "error",
              title: "اطلاعات ورود نادرست است",
              showConfirmButton: false,
              timer: 1500
          });

      }
    })
    .catch((error) => {
      this.loginSuccess = false;
      console.error("Login error:", error);
      console.error("Error message:", error.message);
      console.error("Error response:", error.response);
    });
}
}
</script>
