<template>
  <main class="flex flex-row">
    <div id="_container" class="min-h-screen nav-sidebar">
      <header class="w-full">
        <section class="text-center">
          <img class="m-auto" src="@\assets\DanPersona.svg" />
        </section>
        <!-- Navigation bar -->
        <nav class="mt-10">
          <ul class="flex flex-col gap-4">
            <!-- Dashboard link -->
            <li>
              <router-link to="/">
                <span style="position: relative; top: 6px" class="material-icons">dashboard</span>
                Dashboard
              </router-link>
            </li>
            <!-- Login link - Link only shows if the user is logged out -->
            <li v-if="!user.isLoggedIn">
              <router-link to="/login">
                <span style="position:relative; top: 6px" class="material-icons">login</span>
                Login
              </router-link>
            </li>
            <!-- Logout link - Link only shows if the user is logged in -->
            <li v-if="user.isLoggedIn" @click.prevent="logout" style="cursor: pointer;">
              <span style="position:relative; top: 6px" class="material-icons">logout</span>
              Logout
            </li>
            <!-- Client Intake Form link - only shows if the user is an editor -->
            <li v-if="user.isLoggedIn && user.role === 'editor'">
              <router-link to="/clientform">
                <span style="position: relative; top: 6px" class="material-icons">people</span>
                Client Intake Form
              </router-link>
            </li>
            <!-- Create Event link - only shows if the user is an editor -->
            <li v-if="user.isLoggedIn && user.role === 'editor'">
              <router-link to="/eventform">
                <span style="position: relative; top: 6px" class="material-icons">event</span>
                Create Event
              </router-link>
            </li>
            <!-- Create Service link - only shows if the user is an editor -->
            <li v-if="user.isLoggedIn && user.role === 'editor'">
              <router-link to="/serviceform">
                <span style="position: relative; top: 6px" class="material-icons">volunteer_activism</span>
                Create Service
              </router-link>
            </li>
            <!-- Find Client link - only shows if the user is logged in -->
            <li v-if="user.isLoggedIn">
              <router-link to="/findclient">
                <span style="position: relative; top: 6px" class="material-icons">search</span>
                Find Client
              </router-link>
            </li>
            <!-- Find Event link - only shows if the user is logged in -->
            <li v-if="user.isLoggedIn">
              <router-link to="/findevents">
                <span style="position: relative; top: 6px" class="material-icons">search</span>
                Find Event
              </router-link>
            </li>
            <!-- Find Service link - only shows if the user is logged in -->
            <li v-if="user.isLoggedIn">
              <router-link to="/findservice">
                <span style="position: relative; top: 6px" class="material-icons">search</span>
                Find Service
              </router-link>
            </li>
            
          </ul>
        </nav>
      </header>
    </div>
    <div class="grow w-4/5">
      <!-- Organization Name Header -->
      <section class="justify-end items-center h-24 flex"
        style="background: linear-gradient(250deg, #c8102e 70%, #efecec 50.6%)">
        <h1 class="mr-20 text-3xl text-white"> {{ state.orgName }}</h1>
      </section>
      <!-- Page Content -->
      <div>
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>

<script>
import { useLoggedInUserStore } from './store/loggedInUser';
import { reactive, watch } from 'vue'; // Changed import statement
import { getOrgName } from './api/api';
import { useToast } from 'vue-toastification';

// Notifications
const toast = useToast();

export default {
  setup() {
    const user = useLoggedInUserStore();
    const state = reactive({ orgName: "Dataplatform" });

    watch(() => user.isLoggedIn, async (newValue) => { // Changed from watchEffect to watch
      if (newValue) {
        try {
          state.orgName = await getOrgName();
        } catch (error) {
          // Handle error if needed
          toast.error('Error occurred while fetching organization name', error);
        }
      }
    });

    const logout = () => {
      try {
        // Assuming this method is available in your store
        user.logout();
      } catch (error) {
        toast.error('logout error', error);
      }
    };

    return { user, state, logout };
  },
};
</script>


<style scoped>
#_container {
  background-color: #c8102e;
  color: white;
  padding: 18px;
}

@media print {
  .nav-sidebar {
    display: none;
  }
}
</style>
