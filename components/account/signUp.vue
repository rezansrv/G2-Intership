<template>
  <div class="flex items-center justify-around my-[10px]">
    <div class="hidden md:block">
      <img class="h-[320px]" src="~/assets/img/account.svg" alt="لوگو" />
    </div>
    <div class="animate__animated animate__bounceInRight animate__delay 0.3s ">
    <div class="flex min-h-full flex-col justify-center px-6 py-12" dir="rtl">
      <div class="my-auto sm:w-[400px] sm:max-w-sm">
        <img class="mx-auto h-20 w-auto" src="https://g2internship.com/_nuxt/img/28.74cd8e9.svg" alt="لوگو" />
      </div>

      <div class="mt-10 sm:w-[400px] sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="registerUser">
          <div class="sm:flex  justify-between">

            <div>
              <label for="firstName" class="block text-sm font-medium leading-6 text-gray-900">نام</label>
              <div class="mt-2">
                <input v-model="user.firstName" id="firstName" name="firstName" type="text" autocomplete="given-name" required class="block w-full pr-[15px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <label for="lastName" class="block text-sm font-medium leading-6 text-gray-900">نام خانوادگی</label>
              <div class="mt-2">
                <input v-model="user.lastName" id="lastName" name="lastName" type="text" autocomplete="family-name" required class="block w-full pr-[15px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">ایمیل</label>
            <div class="mt-2">
              <input v-model="user.email" id="email" name="email" type="email" autocomplete="email" required class="block w-full pr-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">رمز عبور</label>
            <div class="mt-2">
              <input v-model="user.password" id="password" name="password" type="password" autocomplete="new-password" required class="block w-full pr-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label for="confirmPassword" class="block text-sm font-medium leading-6 text-gray-900">تکرار رمز عبور</label>
            <div class="mt-2 pb-[10px]">
              <input v-model="user.repeated" id="confirmPassword" name="confirmPassword" type="password" autocomplete="new-password" required class="block w-full pr-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <div class="transition-all duration-500 ease-in-out transform" :class="{ 'translate-y-0': !err, 'translate-y-4': err }">
              <span v-if="err" class="text-[red]">تکرار رمز عبور صحیح نمی باشد</span>
            </div>
          </div>

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-Secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Secondary">ثبت نام</button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          قبلاً عضو شده‌اید؟ {{ ' ' }}
          <nuxt-link to="login" class="font-semibold leading-6 text-primary hover:text-Secondary">ورود</nuxt-link>
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

@Component
export default class Signup extends Vue {
  user = {
    firstName:"",
    lastName:"",
    email: "",
    password: "",
    repeated:""
  };
  loginSuccess: boolean | null = null;
  SignupSuccess: boolean | null = null;
  err: boolean | null = false;

 async registerUser(): Promise<void> {
  const registrationData = {
    fname: this.user.firstName,
    lname: this.user.lastName,
    email: this.user.email,
    pass: this.user.password,
    repass:this.user.repeated,
  };


  console.log(registrationData)
  console.log(this.user.password == this.user.repeated)
  if(this.user.password !== this.user.repeated){
console.log('err')
this.err=true

  }
  else
  {
    this.err=false

    axios.post("http://localhost:3002/users", registrationData)
  .then((response) => {
    console.log(response);
    if (response.status === 201) {
      this.SignupSuccess = true;
      this.$router.replace("/account/login");
    } else {
      this.SignupSuccess = false;
    }
  })
  .catch((error) => {
    if (error.response && error.response.status === 409) {
      // Conflict
      this.SignupSuccess = false;
      console.error("User already exists:", error.response.data.message);
    } else {
      this.SignupSuccess = false;
      console.error("Signup error:", error);
      console.error("Error message:", error.message);
      console.error("Error response:", error.response);
    }
  });
 }
}
  }

</script>
