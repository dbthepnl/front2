<template>
  <AuthCard>
    <!-- Session Status -->
  
    <AuthSessionStatus class="mb-4" :status="status" />


    <form @submit.prevent="submitForm" class="my-4">
      <!-- Email Address -->
      <div>
        <Label for="user_id">사용자 이메일</Label>
        <Input
          id="email"
          type="email"
          class="block mt-1 w-full"
          placeholder="이메일을 입력해주세요."
          v-model="data.email"
          :errors="errors.email?.[0]"
          required
          autoFocus
        />
      </div>

      <!-- Password -->
      <div class="mt-4">
        <Label for="password">비밀번호</Label>
        <Input
          id="password"
          type="password"
          class="block mt-1 w-full"
          placeholder="비밀번호를 입력해주세요."
          v-model="data.password"
          :errors="errors.password"
          required
          autoComplete="current-password"
        />
      </div>

      <!-- Remember Me -->
      <div class="block mt-4">
        <label for="remember" class="inline-flex items-center">
          <input
            id="remember"
            type="checkbox"
            name="remember"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            v-model="data.remember"
          />
          <span class="ml-2 text-sm text-gray-600"> 아이디 기억하기 </span>

        </label>
      </div>

      <div class="flex items-center justify-end mt-4">
       <!-- <NuxtLink
          href="/forgot-password"
          class="underline text-sm text-gray-600 hover:text-gray-900"
        >
          Forgot your password?
        </NuxtLink> -->

        <Button class="ml-3">로그인</Button>
      </div>
    </form>
  </AuthCard>
</template>
<script setup lang="ts">
definePageMeta({ 
  layout: false,
  middleware: ["guest"] });

const router = useRouter();
const route = useRoute();
const { login } = useAuth();

const data = reactive({
  email: null,
  password: null,
  remember: false,
});
const status = ref(
  (route.query.reset ?? "").length > 0 ? atob(route.query.reset as string) : ""
);
const errors = ref<Record<string, string[]>>({});

async function submitForm() {
  errors.value = {};
  status.value = "";

  submitRequest(
    login(data),
    () => {
      router.push("/");
    },
    (validationErrors) => {
      errors.value = validationErrors ?? {};
    }
  );
}
</script>

